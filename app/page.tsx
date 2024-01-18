import HeroSection from "@/components/HeroSection";
import Teams from "@/components/teams/Teams";


export default async function Page() {
  return (
    <>
      <HeroSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Teams />
      </main>
    </>
  );
}
