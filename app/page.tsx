import Teams from "@/components/teams/Teams";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Page() {
  return (
    <>
      <MaxWidthWrapper className="bg-[url('../public/assets/background.png')] bg-cover relative">
        <section className="py-20 flex flex-col relative gap-16 max-w-6xl m-auto px-3 lg:gap-0 lg:flex-row ">
          <section className="flex flex-col pt-16 gap-8 justify-center sm:w-full lg:w-2/3 md:pt-0">
            <p className="text-xl font-normal text-gray-700 text-center lg:text-left">
              Welcome to the Google Developer Student Club (GDSC)
            </p>
            <h1 className="text-5xl leading-tight font-bold text-gray-900 text-center lg:text-left md:leading-tight sm:text-6xl">
              Ignite <span className="text-red-500">Collaboration</span>,{" "}
              <br className="block lg:hidden" />
              Unlock <span className="text-green-500">Innovation</span>
            </h1>
            <div className="mt-4 flex flex-col gap-2 lg:mt-0">
              <p className="text-[16px] font-normal text-gray-700 text-center lg:text-left">
                Join us on this journey of growth
              </p>
              <div className="flex max-w-xs mx-auto w-full lg:mx-0 lg:max-w-sm">
                <Input
                  className="rounded-r-none active:outline-none"
                  placeholder="Email address"
                />
                <Button variant="default" className="rounded-l-none">
                  Join Club
                </Button>
              </div>
            </div>
          </section>
          <section className="flex justify-center items-center animate-levitate">
            <Image
              src="/assets/dev.png"
              alt="gdsc-logo"
              width="350"
              height="350"
            />
          </section>
        </section>
      </MaxWidthWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Teams />
      </main>
    </>
  );
}
