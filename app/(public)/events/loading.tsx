import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import {
    Card,
} from "@/components/ui/card"

export default function Loading() {
    return (
        <MaxWidthWrapper>
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                <Card className="flex flex-col gap-4" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
                    <Skeleton className="h-44 rounded-b-none " />
                    <div className="px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="pt-2 px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="px-4 py-4">
                        <Skeleton className="h-12 w-[120px]" />
                    </div>
                </Card>
                <Card className="flex flex-col gap-4" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
                    <Skeleton className="h-44 rounded-b-none " />
                    <div className="px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="pt-2 px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="px-4 py-4">
                        <Skeleton className="h-12 w-[120px]" />
                    </div>
                </Card>
                <Card className="flex flex-col gap-4" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
                    <Skeleton className="h-44 rounded-b-none " />
                    <div className="px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="pt-2 px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="px-4 py-4">
                        <Skeleton className="h-12 w-[120px]" />
                    </div>
                </Card>
                <Card className="flex flex-col gap-4" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
                    <Skeleton className="h-44 rounded-b-none " />
                    <div className="px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="pt-2 px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="px-4 py-4">
                        <Skeleton className="h-12 w-[120px]" />
                    </div>
                </Card>
                <Card className="flex flex-col gap-4" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
                    <Skeleton className="h-44 rounded-b-none " />
                    <div className="px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="pt-2 px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="px-4 py-4">
                        <Skeleton className="h-12 w-[120px]" />
                    </div>
                </Card>
                <Card className="flex flex-col gap-4" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
                    <Skeleton className="h-44 rounded-b-none " />
                    <div className="px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="pt-2 px-4 space-y-2">
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3" />
                        <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <div className="px-4 py-4">
                        <Skeleton className="h-12 w-[120px]" />
                    </div>
                </Card>
            </div>
        </MaxWidthWrapper>
    )
}