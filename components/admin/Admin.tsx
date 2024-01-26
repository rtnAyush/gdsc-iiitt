import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Home from "./Home"
import UploadEvents from "./Events"
import ModifyTeam from "./ModifyTeam"
import ModifyLeaderBoard from "./ModifyLeaderBoard"
import ModifyUsers from "./ModifyUsers"
import MaxWidthWrapper from "../MaxWidthWrapper"

export default function LeaderBoardUpload() {
    return (
        <main className="flex justify-center items-center my-10">
            <MaxWidthWrapper>
                <Tabs defaultValue="home">
                    <TabsList className="flex justify-center">
                        <TabsTrigger value="home">Home</TabsTrigger>
                        <TabsTrigger value="events">Events</TabsTrigger>
                        <TabsTrigger value="team">Modify Team</TabsTrigger>
                        <TabsTrigger value="leader-board">Modify Leader Board</TabsTrigger>
                        <TabsTrigger value="users">Modify Users</TabsTrigger>
                    </TabsList>
                    <TabsContent value="home"><Home /></TabsContent>
                    <TabsContent value="events"><UploadEvents /></TabsContent>
                    <TabsContent value="team"> <ModifyTeam /></TabsContent>
                    <TabsContent value="leader-board"><ModifyLeaderBoard /></TabsContent>
                    <TabsContent value="users"><ModifyUsers /></TabsContent>
                </Tabs>
            </MaxWidthWrapper>
        </main>
    )
}
