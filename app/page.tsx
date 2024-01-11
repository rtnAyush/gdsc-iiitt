import Teams from "@/components/teams/Teams";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Page() {

  return (
    <>
      <MaxWidthWrapper className='bg-slate-200 '>
        <section className='py-16 bg-slate-200 flex flex-col gap-16 max-w-6xl m-auto px-3 lg:gap-0 lg:flex-row'>
          <section className='flex flex-col gap-12 justify-around sm:w-full lg:gap-0 lg:w-2/3'>
            <h1 className='text-4xl tracking-tight text-gray-900 text-center lg:text-left sm:text-6xl'>
              Ignite <span className="">Collaboration</span>, <br className="block lg:hidden"/> 
              Unlock <span className="">Innovation</span>
            </h1>
            <div className="flex max-w-xs mx-auto w-full lg:mx-0 lg:max-w-sm">
              <Input className="rounded-r-none active:outline-none" placeholder="Email address"/>
              <Button variant="default" className="rounded-l-none">Join Club</Button>
            </div>
          </section>
          <section className="flex justify-center items-center">
            <Image src="/assets/HomePage.png" alt="gdsc-logo" width="450" height="450" />
          </section>
        </section>
      </MaxWidthWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Teams />
      </main>
    </>
  )
}
