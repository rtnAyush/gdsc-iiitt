'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiSolidError } from "react-icons/bi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/SubmitButton";
import { postEvent } from "@/lib/actions/events.action";

const formSchema = z
    .object({
        title: z.string().min(2, "Title is required").max(100, "Title should be less than 100 characters"),
        description: z.string().min(2, "Description is required").max(1000, "Description should be less than 1000 characters"),
        dateTime: z.string().min(2, "Date is required"),
        imgUrl: z.instanceof(File).refine((file) => file.size > 0, "Image is required"),
        venue: z.string().optional(),
        mode: z.string().min(2, "Mode is required"),
    });

export default function AddEventForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            dateTime: "",
            imgUrl: undefined,
            venue: "",
            mode: "online",
        },
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("dateTime", values.dateTime);
        formData.append("imgUrl", values.imgUrl);
        formData.append("venue", values.venue || "");
        formData.append("mode", values.mode);

        try {
            const res = await postEvent(formData);
            console.log(res);
        } catch (error: any) {
            console.log(error.message);

            form.setError("root.serverError", {
                type: "manual",
                message: error ? error.message : "Something went wrong",
            });
        }
    };

    const onInvalid = (errors: any) => console.error(errors);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add New Events</Button>
            </DialogTrigger>
            <DialogContent className="sm:min-w-[800px] ">
                <DialogHeader>
                    <DialogTitle>Add New Events</DialogTitle>
                    <DialogDescription>Make changes to the event here. Click save when you&apos;re done.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit, onInvalid)}
                        className="lg:col-span-2"
                    >
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="md:col-span-2">
                                        <FormLabel className="text-gray-400">Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Enter title of event"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="mode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-400">Mode</FormLabel>
                                        <FormControl>
                                            <select
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                {...field}
                                            >
                                                <option value="online">Online</option>
                                                <option value="offline">Offline</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dateTime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-400">Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                type="datetime-local"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="venue"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-400">Venue</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="leave blank if online"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="imgUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-400">Image URL</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                type="file"
                                                accept=".jpg, .png"
                                                onChange={(e) => {
                                                    if (e.target.files) {
                                                        field.onChange(e.target.files[0]);
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="md:col-span-2">
                                        <FormLabel className="text-gray-400">Description</FormLabel>
                                        <FormControl>
                                            <textarea
                                                className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Enter description of event"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {form.formState.errors.root && (
                                <div className='flex gap-4 p-4 bg-red-200 rounded-sm'>
                                    <BiSolidError className="h-5 w-5 text-red-500" />
                                    <p className="text-sm text-red-500">{form.formState.errors?.root?.serverError.message}</p>
                                </div>
                            )}

                            <div className="flex justify-between my-4">
                                <Link href={"/sops"}>
                                    <Button variant="outline">Cancel</Button>
                                </Link>
                                <SubmitButton form={form} text="Save" />
                            </div>
                        </div>
                        {form.formState.errors.root && (
                            <div className='flex gap-4 p-4 bg-red-200 rounded-sm'>
                                <p className="text-sm text-red-500">{form.formState.errors?.root?.serverError.message}</p>
                            </div>
                        )}
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
