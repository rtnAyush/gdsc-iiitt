import MemberCard from "./MemberCard";

const leads = [
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    }
]
const members = [
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
    {
        name: "Shad",
        role: "Founder",
        imageUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/shadcn/",
        githubUrl: "https://www.github.com/shadcn"
    },
];

export default function Teams() {
    return (
        <div >
            <section className="text-center py-4 mb-10" style={{ backgroundImage: "url('/patterns/double-bubble-outline.png')" }}>
                <span className="text-3xl font-normal text-center bg-yellow-300 px-10 rounded-sm text-white">Teams</span>
            </section>
            <p className="font-[500]">"a great community is built by great students."</p>
            <p className="text-2xl text-[#808080] font-[400] my-4">
                meet our teams of <i className="text-3xl text-black font-[500]">leaders, designers, developers, problem solvers</i> and many
                more.
            </p>
            <p className="text-sm text-[#808080] font-[400] my-4">
                To be a community students want us to be,lt takes an eclectic group of passionate students Because It is a community <i className="text-black">of the students. by
                    the students, for the students.</i> Get to know the people leading the way at GDSC IIIT-T.
            </p>
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
            <section>
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
    )
}
