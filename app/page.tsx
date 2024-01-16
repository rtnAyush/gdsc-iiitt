import Teams from "@/components/teams/Teams";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <MaxWidthWrapper className="bg-gray-100 relative z-[-10]">
        <section className="pt-20 pb-10 flex flex-col items-center gap-16 max-w-6xl m-auto px-3 lg:gap-0 lg:flex-row ">
          <div className="absolute z-[-2] top-0 left-[-18px] w-40 h-40 bg-red-400 rounded-br-full animate-floatX"></div>
          <div className="absolute z-[-2] top-20 right-0 w-28 h-56 bg-yellow-200 rounded-tl-full rounded-bl-full animate-floatX"></div>
          <Link
            className="absolute md:top-10 flex justify-center items-center gap-4 py-1 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-300"
            href="/"
          >
            <Image src="/assets/medal.svg" alt="medal" width="20" height="20" />{" "}
            <h4 className="text-gray-800">See Leaderboard</h4>
          </Link>
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
          <section className="flex justify-center items-center animate-floatY">
            <Image
              src="/assets/dev.png"
              alt="gdsc-logo"
              width="350"
              height="350"
            />
          </section>
          <div className="absolute bottom-0 right-0">
            <svg
              style={{
                margin: "auto",
                background: "rgba(NaN, NaN, NaN, 0)",
                display: "block",
                zIndex: "-1",
                position: "relative",
              }}
              width="1939"
              height="148"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 1939 148"
            >
              <g transform="translate(969.5,74) scale(-1,-1) translate(-969.5,-74)">
                <linearGradient
                  id="lg-0.7659895309868023"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="0"
                >
                  <stop stop-color="#00c16b" offset="0"></stop>
                  <stop stop-color="#00c16b" offset="1"></stop>
                </linearGradient>
                <path d="" fill="url(#lg-0.7659895309868023)" opacity="0.27">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                    begin="0s"
                    values="M0 0L 0 115.22726238495542Q 193.9 125.38755443504364  387.8 94.85874317705739T 775.6 74.9417672927285T 1163.4 52.19316277692661T 1551.2 47.86974955172916T 1939 11.887856816026044L 1939 0 Z;M0 0L 0 104.85393826289476Q 193.9 135.94093165968343  387.8 98.22153009463803T 775.6 67.16718880894837T 1163.4 40.814750051241695T 1551.2 31.714347272706405T 1939 2.2608464673249244L 1939 0 Z;M0 0L 0 97.88932894808721Q 193.9 143.76556296441564  387.8 96.77878041351795T 775.6 77.70770826660919T 1163.4 56.45509236327314T 1551.2 52.37009456253145T 1939 16.19041305592266L 1939 0 Z;M0 0L 0 115.22726238495542Q 193.9 125.38755443504364  387.8 94.85874317705739T 775.6 74.9417672927285T 1163.4 52.19316277692661T 1551.2 47.86974955172916T 1939 11.887856816026044L 1939 0 Z"
                  ></animate>
                </path>
                <path d="" fill="url(#lg-0.7659895309868023)" opacity="0.27">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                    begin="-2s"
                    values="M0 0L 0 120.22864398764332Q 193.9 113.63538024931128  387.8 87.52351173850317T 775.6 70.59064124170366T 1163.4 50.89659710125473T 1551.2 25.893475694553374T 1939 7.258387129507867L 1939 0 Z;M0 0L 0 103.63328966747304Q 193.9 120.2612239776951  387.8 93.63808501988416T 775.6 65.14583566771391T 1163.4 59.533365262853714T 1551.2 34.14397361925718T 1939 18.104378937567873L 1939 0 Z;M0 0L 0 98.78934392174065Q 193.9 108.12006552470443  387.8 83.76609585914824T 775.6 61.10538396055768T 1163.4 41.13241076842295T 1551.2 15.625154557784626T 1939 10.868657544938799L 1939 0 Z;M0 0L 0 120.22864398764332Q 193.9 113.63538024931128  387.8 87.52351173850317T 775.6 70.59064124170366T 1163.4 50.89659710125473T 1551.2 25.893475694553374T 1939 7.258387129507867L 1939 0 Z"
                  ></animate>
                </path>
                <path d="" fill="url(#lg-0.7659895309868023)" opacity="0.27">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                    begin="-4s"
                    values="M0 0L 0 103.98258307032874Q 193.9 105.21929446752941  387.8 82.31458885412545T 775.6 69.06128848975048T 1163.4 41.89960254154782T 1551.2 41.033153550578675T 1939 28.137901907597737L 1939 0 Z;M0 0L 0 112.16445127839026Q 193.9 115.4707818062606  387.8 79.01669527259607T 775.6 67.37491133471605T 1163.4 43.143744608359036T 1551.2 22.46418069965378T 1939 -1.7709759355449108L 1939 0 Z;M0 0L 0 121.92911786768096Q 193.9 123.53406237283889  387.8 85.71460912687385T 775.6 60.928018004491T 1163.4 56.803281849054585T 1551.2 26.441014730886494T 1939 -7.995389814292011L 1939 0 Z;M0 0L 0 103.98258307032874Q 193.9 105.21929446752941  387.8 82.31458885412545T 775.6 69.06128848975048T 1163.4 41.89960254154782T 1551.2 41.033153550578675T 1939 28.137901907597737L 1939 0 Z"
                  ></animate>
                </path>
                <path d="" fill="url(#lg-0.7659895309868023)" opacity="0.27">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                    begin="-6s"
                    values="M0 0L 0 99.68529239687317Q 193.9 119.78147615662023  387.8 97.67074083551944T 775.6 64.63377533748968T 1163.4 45.25590902358475T 1551.2 23.007135163165557T 1939 14.025782950193843L 1939 0 Z;M0 0L 0 120.73561881862796Q 193.9 114.01793186921236  387.8 95.51703075514948T 775.6 75.96824536101641T 1163.4 68.40278649227737T 1551.2 47.85353884135952T 1939 18.146373662360915L 1939 0 Z;M0 0L 0 114.45424249332636Q 193.9 120.66912805213006  387.8 96.1810432185917T 775.6 61.371041449261575T 1163.4 67.69789288836222T 1551.2 30.502397546206694T 1939 19.682851980398326L 1939 0 Z;M0 0L 0 99.68529239687317Q 193.9 119.78147615662023  387.8 97.67074083551944T 775.6 64.63377533748968T 1163.4 45.25590902358475T 1551.2 23.007135163165557T 1939 14.025782950193843L 1939 0 Z"
                  ></animate>
                </path>
                <path d="" fill="url(#lg-0.7659895309868023)" opacity="0.27">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    keyTimes="0;0.333;0.667;1"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                    begin="-8s"
                    values="M0 0L 0 98.25462797298407Q 193.9 127.63218501343508  387.8 89.8976120025304T 775.6 56.909737669984324T 1163.4 37.034469529156T 1551.2 23.063550377526738T 1939 7.085660147033707L 1939 0 Z;M0 0L 0 97.97556079964737Q 193.9 98.98400248711503  387.8 83.06453072639897T 775.6 61.692172938662324T 1163.4 60.37203739695006T 1551.2 21.51365673925605T 1939 10.981775474640017L 1939 0 Z;M0 0L 0 110.2042909786967Q 193.9 97.00970167322858  387.8 80.15662107146493T 775.6 79.39695216681392T 1163.4 46.57450762237451T 1551.2 46.17209512335177T 1939 5.136051689536956L 1939 0 Z;M0 0L 0 98.25462797298407Q 193.9 127.63218501343508  387.8 89.8976120025304T 775.6 56.909737669984324T 1163.4 37.034469529156T 1551.2 23.063550377526738T 1939 7.085660147033707L 1939 0 Z"
                  ></animate>
                </path>
              </g>
            </svg>{" "}
          </div>
        </section>
      </MaxWidthWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Teams />
      </main>
    </>
  );
}
