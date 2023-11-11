"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../database";
import User from "../models/user.model";
import bcript from "bcrypt";
import Group from "../models/group.model";

interface addUserParams {
  username: string;
  email: string;
  password: string;
  role: string;
  position: string;
  status: string;
}

export async function addUser({
  username,
  email,
  password,
  role,
  position,
  status,
}: addUserParams): Promise<any> {
  try {
    connectToDB();
    const hashedPasswd = bcript.hashSync(password, 10);
    await User.create({
      username,
      email,
      password: hashedPasswd,
      role,
      position,
      status,
    });
    revalidatePath("/(root)/users", "page");
    return JSON.stringify({
      error: false,
      msg: "success",
    });
  } catch (e: any) {
    return JSON.stringify({
      error: true,
      msg: e.message,
    });
  }
}

interface updateUserParams {
  _id: string;
  username: string;
  email: string;
  role: string;
  position: string;
  status: string;
  linkedGroups: string[];
}

export async function updateUser({
  _id,
  username,
  email,
  role,
  position,
  status,
  linkedGroups,
}: updateUserParams): Promise<any> {
  try {
    connectToDB();

    await User.findByIdAndUpdate(_id, {
      username,
      email,
      role,
      position,
      status,
      linkedGroups,
    });

    revalidatePath("/(root)/users", "page");

    return JSON.stringify({
      error: false,
      msg: "success",
    });
  } catch (e: any) {
    return JSON.stringify({
      error: true,
      msg: e.message,
    });
  }
}

export async function fetchUsers() {
  try {
    connectToDB();

    const foundUsers = await User.find({})
      .select("-password")
      .populate("linkedGroups");

    revalidatePath("/(root)/users", "page");
    return JSON.stringify(foundUsers);
  } catch (e: any) {
    return JSON.stringify({
      error: true,
      msg: e.message,
    });
  }
}

export async function fetchUser({ userId }: { userId: string }) {
  try {
    connectToDB();

    const foundUser = await User.findById(userId);

    revalidatePath("/(root)/users", "page");

    return JSON.parse(JSON.stringify(foundUser));
  } catch (e: any) {
    return JSON.stringify({
      error: true,
      msg: e.message,
    });
  }
}

export async function deleteUser({ userId }: { userId: string }) {
  try {
    connectToDB();

    const foundGroup = await User.findById(userId);

    await Group.updateMany(
      { _id: { $in: foundGroup.linkedGroups } },
      { $pull: { users: userId } }
    );

    await User.findByIdAndDelete(userId);
    revalidatePath("/(root)/users", "page");

    return JSON.stringify({
      error: false,
      msg: "success",
    });
  } catch (e: any) {
    return JSON.stringify({
      error: true,
      msg: e.message,
    });
  }
}

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    connectToDB();

    const res = await User.findOne({ email: email });

    if (!res) {
      // check in labFinderDB
      const isUserExist = await fetch(
        `${process.env.LABFINDER_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const res1 = await isUserExist.json();

      if (!res1.message) {
        await User.create({
          username: res1.user.name,
          email: res1.user.email,
          password: res1.user.password,
          role: res1.isAdmin ? "admin" : "read-only",
          position: ".",
          status: "Active",
        });

        return JSON.stringify({
          error: false,
          msg: "success",
          user: res1,
        });
      }
      return JSON.stringify({
        error: true,
        msg: "User not found",
      });
    }

    const hashedPasswd = bcript.compareSync(password, res.password);

    if (!hashedPasswd) {
      return JSON.stringify({
        error: true,
        msg: "Wrong password",
      });
    }

    await User.findByIdAndUpdate(res._id, { lastLogin: Date.now() });

    return JSON.stringify({
      error: false,
      msg: "success",
      user: res,
    });
  } catch (e: any) {
    console.log(e.message);

    return JSON.stringify({
      error: true,
      msg: e.message,
    });
  }
}
