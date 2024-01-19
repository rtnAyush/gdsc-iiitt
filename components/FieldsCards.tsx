import Image from "next/image";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function FieldsCards({ h2, img, para,className }) {  
  return (
    <MaxWidthWrapper className=''>
      <section className={cn(className, 'flex items-center justify-center gap-16 max-w-6xl mx-auto px-3 py-16 lg:px-0 lg:py-6')}>
        <div className="hidden lg:block">
          <Image src={img} width='300' height='300' alt={h2} />
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-center lg:text-left">{h2}</h2>
          <p className="mt-8 max-w-prose">{para}</p>
        </div>
      </section >
    </MaxWidthWrapper>
  )
}
