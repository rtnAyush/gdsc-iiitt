import EventsCards from "./EventsCards";
import { getEvents } from "@/lib/actions/events.action";

export default async function HomePageEvent() {
    // TODO: Fetch recent 3 events from the database
    const upcomingEvents: any = await getEvents(new Date(), 'upcoming', 3);

    return (

        <div>
            {
                upcomingEvents.data?.length > 0 &&

                <section className="relative" style={{
                    background: "url('/assets/bg-event.png') 40%",
                    backgroundSize: "cover",
                }} >
                    <div className="max-w-5xl m-auto py-10 px-3">
                        <h2 className="text-5xl text-center my-10">Upcoming events</h2>
                        <div className="z-10 relative grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                            {
                                upcomingEvents.data.map((event: any) => (
                                    <EventsCards
                                        key={event.id}
                                        id={event.id}
                                        title={event.title}
                                        dateTime={event.dateTime}
                                        desciption={event.description}
                                        mode={event.mode}
                                    // imgUrl={event.imgUrl}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}
