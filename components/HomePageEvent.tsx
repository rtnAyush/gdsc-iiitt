import EventsCards from "./EventsCards";

const events = [
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam Calling all tech enthusiasts! 'Week of Learning' from 13th May to 22nd May will equip tech enthusiasts with the latest and in-demand skills in the tech industry, including App Development, Web Development, Machine Learning, DevOps, UI/UX designing and startup. laborum maiores modi natus quod, ipsum nam.",
        imgUrl: "/assets/jhon-card.jpg",
        date: "12/12/2021",
        time: "12:00 PM",
        location: "Online",
        tags: "#Lorem ipsum dolor sit amet.",
    },
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Calling all tech enthusiasts! 'Week of Learning' from 13th May to 22nd May will equip tech enthusiasts with the latest and in-demand skills in the tech industry, including App Development, Web Development, Machine Learning, DevOps, UI/UX designing and startup.  Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
        imgUrl: "/assets/jhon-card.jpg",
        date: "12/12/2021",
        time: "12:00 PM",
        location: "Online",
        tags: "#Lorem ipsum dolor sit amet.",
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing Calling all tech enthusiasts! 'Week of Learning' from 13th May to 22nd May will equip tech enthusiasts with the latest and in-demand skills in the tech industry, including App Development, Web Development, Machine Learning, DevOps, UI/UX designing and startup. elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
        imgUrl: "/assets/jhon-card.jpg",
        date: "12/12/2021",
        time: "12:00 PM",
        location: "Online",
        tags: "#Lorem ipsum dolor sit amet.",
    },
]

export default function HomePageEvent() {
    // TODO: Fetch recent 3 events from the database
    return (
        <div>
            <section className="relative" style={{
                background: "url('/assets/bg-event.png') 40%",
                backgroundSize: "cover",
            }} >
                <div className="max-w-5xl m-auto py-10 px-3">
                    <h2 className="text-5xl text-center my-10">Recent events</h2>
                    <div className="z-10 relative grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                        {
                            events.map((event, idx) => (
                                <EventsCards
                                    key={idx}
                                    title={event.title}
                                    date={event.date}
                                    time={event.time}
                                    desciption={event.description}
                                    tags={event.tags}
                                    imgUrl={event.imgUrl}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
