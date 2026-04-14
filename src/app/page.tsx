import LandingDesktop from "@/components/landing/LandingDesktop";
import LandingMobile from "@/components/landing/LandingMobile";

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <LandingDesktop />
      </div>
      <div className="lg:hidden">
        <LandingMobile />
      </div>
    </>
  );
}
