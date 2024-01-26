"use client";
import { useState } from 'react';
import { addStudentDatas, fetchStudentData } from '@/lib/actions/student.action';
import parsedData from '@/controllers/studentdata.controller';
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from '../ui/button';
import { Input } from '../ui/input';



export default function ModifyLeaderBoard() {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    async function handleSubmit(formData: FormData) {

        const file = formData.get('excel-file');

        if (!file) {
            console.log("No file selected.");
            return;
        }

        try {
            setLoading(true);
            const exsitingdata = await fetchStudentData();
            const parsedDataResult = await parsedData({ file: file as Blob, existingData: exsitingdata?.data || [] });
            if (parsedDataResult?.error) {
                toast.error(parsedDataResult.msg);
                return;
            }
            const res = addStudentDatas(parsedDataResult.data);
            toast.promise(
                res,
                {
                    loading: 'Loading',
                    success: "Successfully saved",
                    error: "something went wrong",
                },
                {
                    style: {
                        minWidth: '250px',
                    },
                    success: {
                        duration: 5000,
                        icon: '🔥',
                    },
                }
            );
        } catch (error: any) {
            toast.error("Error parsing data:", error);
        } finally {
            setLoading(false);
        }


    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Modify Leader Board</CardTitle>
                <CardDescription>
                    Upload a new excel file to update the leader board,
                    this time it will show correct ranking according to the time they completed.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">

                <DeleteModal setShow={setShow} show={show} />
                <div className='flex justify-end m-3'>
                    <Dialog>
                        <DialogTrigger className='border bg-sky-300 text-white rounded-md p-2 cursor-pointer hover:bg-sky-500'>Add</DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle asChild>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <form className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="name" className="whitespace-nowrap">
                                        Name
                                    </label>
                                    <Input placeholder='Enter Name' required id="name" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="email" className="whitespace-nowrap">
                                        Email
                                    </label>
                                    <Input placeholder='Enter Email' required id="email" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="role" className="whitespace-nowrap">
                                        Role
                                    </label>
                                    <select id="role" className="col-span-3 border-2 border-gray-200 rounded-md p-2">
                                        <option value="">--SELECT ROLE--</option>
                                        <option value="GDSC_LEAD">GDSC LEAD</option>
                                        <option value="LEAD">LEAD</option>
                                        <option value="MEMBER">MEMBER</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="position" className="whitespace-nowrap">
                                        Position
                                    </label>
                                    <Input id="position" placeholder='Specify Position' className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="img" className="whitespace-nowrap">
                                        Image
                                    </label>
                                    <Input id="img" required type="file" accept="image/*" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="github-url" className="whitespace-nowrap">
                                        GitHub Url
                                    </label>
                                    <Input required id="github-url" type='url' placeholder='GitHub Url' className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label htmlFor="linkedin-url" className="whitespace-nowrap">
                                        LinkedIn Url
                                    </label>
                                    <Input required id="linkedin-url" type='url' placeholder='linkedin Url' className="col-span-3" />
                                </div>
                                <Button type="submit">Save changes</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="whitespace-nowrap">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="whitespace-nowrap">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}