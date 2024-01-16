import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import EventsCards from "@/components/EventsCards";
import Carousel from "@/components/Carousel";

const events = [
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.",
    imgUrl: "/assets/jhon-card.jpg",
    date: "12/12/2021",
    time: "12:00 PM",
    location: "Online",
    tags: "#Lorem ipsum dolor sit amet.",
  },
]

export default async function Page() {

  //TODO: Fetch events and pass them to EventsCards

  return (
    <>
      <MaxWidthWrapper className="bg-[url('/assets/background.png')] bg-cover relative">
        <section className="py-20 flex flex-col items-center relative gap-16 max-w-6xl m-auto px-3 lg:gap-16 lg:flex-row ">
          <div className="sm:w-full h-full lg:w-1/2">
            <section className="flex flex-col gap-4 mx-auto max-w-3xl min-h-full md:pt-0">
              <h1 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
                Welcome to the GDSC Events
              </h1>
              <p className="text-center lg:text-left">
                At GDSC, we believe in fostering a vibrant community of
                developers, learners, and tech enthusiasts. Our events are
                designed to provide you with valuable insights, hands-on
                experience, and networking opportunities to help you grow in the
                world of technology. Check out our upcoming events and join us for
                an unforgettable learning journey!
              </p>
            </section>
          </div>

          <Carousel />

        </section>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="">

        <section className="">
          <div className="max-w-6xl m-auto py-10 px-3">
            <h2 className="text-2xl">Upcoming events</h2>
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
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

        <section className="">
          <div className="max-w-6xl m-auto py-10 px-3">
            <h2 className="text-2xl">Recent events</h2>
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
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

        <section className="bg-gray-200">
          <div className="max-w-6xl m-auto py-10 px-3">
            <h2 className="text-2xl">Past events</h2>
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
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

      </MaxWidthWrapper>
    </>
  );
}
