import FieldsCards from "@/components/FieldsCards";
import HeroSection from "@/components/HeroSection";
import Teams from "@/components/teams/Teams";
import img from '../public/assets/web_pic.png'

export default async function Page() {
  const fields = [
    {
      h2: 'Web Development',
      img: img,
      para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
    },
    {
      h2: 'Web Development',
      img: img,
      para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
    },
    {
      h2: 'Web Development',
      img: img,
      para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
    },
    {
      h2: 'Web Development',
      img: img,
      para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
    },
    {
      h2: 'Web Development',
      img: '/public/assets/web_pic.png',
      para: 'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.'
    },
  ]
  const fieldCards = fields.map((field, index) => {
    return (
      <FieldsCards h2={field.h2} img={field.img} para={field.para} key={index} className={index % 2 == 0 ? 'flex-row-reverse' : ''} />
    )
  })

  return (
    <>
      <HeroSection />
      <div>
        <h1 className="text-5xl text-center my-20">What does GDSC-IIITT do?</h1>
        <p>We at DSC-AKGEC are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.</p>
      </div>
      <h2 className="text-5xl text-center mt-6">Fields we work in</h2>
      <section className="bg-white [&>*:nth-child(even)]:bg-gray-200">
        {fieldCards}
      </section>
  
    </>
  );
}
