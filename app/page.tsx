import FieldsCards from "@/components/FieldsCards";
import HeroSection from "@/components/HeroSection";
import HomePageEvent from "@/components/HomePageEvent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";


export default async function Page() {
    const fields = [
        {
            h2: 'Web Development',
            img: "/assets/web_pic.png",
            para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
        },
        {
            h2: 'Web Development',
            img: "/assets/web_pic.png",
            para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
        },
        {
            h2: 'Web Development',
            img: "/assets/web_pic.png",
            para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
        },
        {
            h2: 'Web Development',
            img: "/assets/web_pic.png",
            para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
        },
        {
            h2: 'Web Development',
            img: '/assets/web_pic.png',
            para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
        },
    ]


    return (
        <>
            <HeroSection />
            <MaxWidthWrapper className="mt-0 mb-20">
                <h1 className="text-5xl text-center my-16">What does GDSC-IIITT do?</h1>
                <p className="text-center text-md">We at IIIT-Trichy are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.</p>
            </MaxWidthWrapper>
            <h2 className="text-5xl text-center mt-6 bg-gray-200 py-10">Fields we work in</h2>
            <section className="bg-white [&>*:nth-child(odd)]:bg-gray-200">
                {
                    fields.map((field, index) =>
                        <FieldsCards
                            h2={field.h2}
                            img={field.img}
                            para={field.para}
                            key={index}
                            className={index % 2 == 0 ? 'flex-row-reverse' : ''}
                        />
                    )}
            </section>

            <HomePageEvent />

            <div className="my-20">
                <h2 className="text-5xl text-center mt-6 py-10">Team</h2>

                <FieldsCards
                    h2={""}
                    img={"/assets/team-cartoon.png"}
                    para={"A Team is as efficient as the members of its team are. This is a rundown of how explicable each individual is and how they supplement the team."}
                    isBtn={true}
                />
            </div>
        </>
    );
}
