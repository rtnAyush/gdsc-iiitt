import MemberCard from "@/components/teams/MemberCard";
import { leads, members } from "@/lib/constants/teams";


export default function page() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <section className="text-center py-10" style={{ backgroundImage: "url('/patterns/double-bubble-outline.png')" }}>
                    <span className="text-3xl font-normal text-center bg-yellow-300 px-10 rounded-sm text-white">Teams</span>
                </section>

                <div className="items-center justify-between px-24 my-10">
                    <p className="font-[500]">"a great community is built by great students."</p>
                    <p className="text-2xl text-[#808080] font-[400] my-4">
                        meet our teams of <i className="text-3xl text-black font-[500]">leaders, designers, developers, problem solvers</i> and many
                        more.
                    </p>
                    <p className="text-sm text-[#808080] font-[400] my-4">
                        To be a community students want us to be,lt takes an eclectic group of passionate students Because It is a community <i className="text-black">of the students. by
                            the students, for the students.</i> Get to know the people leading the way at GDSC IIIT-T.
                    </p>

                </div>

                <div>
                    <section className="text-center py-10 my-10" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", backgroundImage: "url('/patterns/double-bubble-outline.png')" }}>
                        <span className="text-3xl font-normal text-center bg-yellow-300 px-10 rounded-sm text-white">GDSC Lead 2023</span>
                    </section>
                    <section style={{ maxWidth: "1000px" }} className="m-auto flex gap-16 flex-wrap justify-center items-center">
                        <MemberCard
                            idx={0}
                            name={"BB"}
                            role={"Lead"}
                            imageUrl={""}
                            linkedinUrl={"https://www.linkedin.com/in/shadcn/"}
                            githubUrl={"https://www.github.com/shadcn"}
                        />
                    </section>
                </div>


                <div>
                    <section className="text-center py-10 my-10" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", backgroundImage: "url('/patterns/double-bubble-outline.png')" }}>
                        <span className="text-3xl font-normal text-center bg-yellow-300 px-10 rounded-sm text-white">Core Team</span>
                    </section>
                    <section style={{ maxWidth: "1000px" }} className="m-auto flex gap-16 flex-wrap justify-center items-center">
                        {
                            leads.map((member, idx) => (
                                <MemberCard
                                    idx={idx}
                                    name={member.name}
                                    role={member.role}
                                    imageUrl={member.imageUrl}
                                    linkedinUrl={member.linkedinUrl}
                                    githubUrl={member.githubUrl}
                                />
                            ))
                        }
                    </section>
                </div>


                <div className="mb-10">
                    <section className="text-center py-10 my-10" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", backgroundImage: "url('/patterns/double-bubble-outline.png')" }}>
                        <span className="text-3xl font-normal text-center bg-yellow-300 px-10 rounded-sm text-white">Core Members</span>
                    </section>
                    <section style={{ maxWidth: "1000px" }} className="m-auto flex gap-16 flex-wrap justify-center items-center">
                        {
                            members.map((member, idx) => (
                                <MemberCard
                                    idx={idx}
                                    name={member.name}
                                    role={member.role}
                                    imageUrl={member.imageUrl}
                                    linkedinUrl={member.linkedinUrl}
                                    githubUrl={member.githubUrl}
                                />
                            ))
                        }
                    </section>
                </div>
            </main>
        </>
    )
}
