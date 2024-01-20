import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";


export default function FieldsCards({ h2, img, para, className, isBtn }: { h2: string, img: string, para: string, className?: string, isBtn?: boolean }) {
  return (
    <div style={{ boxShadow: !isBtn ? "rgba(0, 0, 0, 0.16) 0px 1px 1px" : "" }}>
      <section className={cn(className, 'flex items-center justify-center max-w-6xl mx-auto px-3 py-16 lg:px-0 lg:py-6')}>
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <Image
            src={img}
            width={0}
            height={300}
            sizes="100vw"
            style={{ width: '100%', height: '300px' }}
            className="overflow-hidden object-contain"
            alt={h2} />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-center lg:text-left">{h2}</h2>
          <p className="mt-8 max-w-prose">{para}</p>
          {isBtn && <Button variant="default" className="my-10">SEE MORE</Button>}
        </div>
      </section >
    </div>
  )
}
