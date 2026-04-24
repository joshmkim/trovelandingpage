"use client";

import { useEffect, useState } from "react";
import { DESKTOP_FRAME_H, DESKTOP_FRAME_W, desktopAssets as d } from "./desktop-assets";
import { DesktopFaq } from "./DesktopFaq";
import { FeatureVisual } from "./feature-visual";
import { LilDrink } from "./lil-drink";

const CALENDLY_URL = "https://calendly.com/d/ctyk-9ry-wxs/trove-demo";
const EMAIL = "kimjosh@usc.edu";
const MAILTO = `mailto:${EMAIL}`;

type DesktopSection = "features" | "faq" | "contact";

const DESKTOP_SECTION_Y: Record<DesktopSection, number> = {
  features: 993,
  faq: 2607,
  contact: 3458,
};

function DesktopCanvas({
  activeSection,
  onSelectSection,
}: {
  activeSection: DesktopSection;
  onSelectSection: (s: DesktopSection) => void;
}) {
  return (
    <div className="relative size-full bg-white">
      <div className="absolute left-[calc(50%-2px)] top-[993px] flex w-[962px] -translate-x-1/2 flex-col items-end justify-center gap-[25px]">
        <div className="relative flex w-full shrink-0 flex-col items-end gap-[15px] font-medium">
          <p className="relative w-full min-w-full shrink-0 font-mono text-[18px] uppercase leading-[1.11] text-[#718d53]">
            features
          </p>
          <p
            className="relative w-full min-w-full shrink-0 text-[50px] leading-normal text-[#2c2b2a]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Order smarter and stay ahead of demand.
          </p>
          <p
            className="relative w-[963px] shrink-0 text-[25px] leading-[1.11] text-[#9a958b]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Cafes are managing perishable inventory, fast-changing demand, and daily ordering decisions across
            several vendors. Trove is built specifically for that reality so your system actually matches how your
            business runs.
          </p>
        </div>
        <div className="relative flex shrink-0 items-start gap-[14px]">
          <p
            className="relative shrink-0 whitespace-nowrap text-[25px] font-medium leading-[1.11] text-[#9a958b]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            with
          </p>
          <div className="relative h-[25px] w-[112px] shrink-0">
            <img alt="Trove" className="absolute inset-0 block size-full max-w-none" src={d.wordmark} />
          </div>
        </div>
      </div>
      <div className="absolute left-[295px] top-[2607px] flex w-[921px] flex-col items-start justify-center gap-[15px] font-medium">
        <p className="relative w-full shrink-0 font-mono text-[18px] uppercase leading-[1.11] text-[#718d53]">faqs</p>
        <p
          className="relative w-full shrink-0 text-[50px] leading-normal text-[#2c2b2a]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Off-the-shelf answers to your questions
        </p>
      </div>
      <div className="absolute left-[160px] top-[1408px] flex w-[1192px] flex-col items-start gap-[25px]">
        <div className="relative flex w-full shrink-0 items-center gap-[150px]">
          <div className="relative flex w-[534px] shrink-0 flex-col items-start gap-[20px] font-medium">
            <p
              className="relative w-full shrink-0 text-[35px] leading-normal text-[#2c2b2a]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Know exactly what you’re using
            </p>
            <p
              className="relative w-full shrink-0 text-[20px] leading-[1.11] text-[#9a958b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Track ingredient usage in real time by connecting your POS and vendor ordering invoices. Stock updates
              automatically as items are sold and received, so your inventory reflects what’s actually happening in
              your cafe.
            </p>
          </div>
          <FeatureVisual
            assets={d}
            className="relative flex h-[325px] w-[508px] shrink-0 flex-col items-center gap-[100px] overflow-hidden rounded-[20px] border border-solid border-[rgba(154,149,139,0.25)] bg-[#fdfbf8] p-[25px]"
          />
        </div>
        <div className="relative flex w-full shrink-0 items-center gap-[150px]">
          <FeatureVisual
            assets={d}
            className="relative flex h-[325px] w-[508px] shrink-0 items-start justify-center gap-[10px] overflow-hidden rounded-[20px] border border-solid border-[rgba(154,149,139,0.25)] bg-[#fdfbf8] p-[25px]"
            property1="Feature2"
          />
          <div className="relative flex w-[534px] shrink-0 flex-col items-start gap-[20px] font-medium">
            <p
              className="relative w-full shrink-0 text-[35px] leading-normal text-[#2c2b2a]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Smarter ordering
            </p>
            <p
              className="relative w-full shrink-0 text-[20px] leading-[1.11] text-[#9a958b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Trove analyzes your sales history, demand patterns, and trends to create your next order. Your past data
              becomes clear and actionable so you’re not relying on guesswork, and have more time to run your cafe.
            </p>
          </div>
        </div>
        <div className="relative flex w-full shrink-0 items-center gap-[150px]">
          <div className="relative flex w-[534px] shrink-0 flex-col items-start gap-[20px] font-medium">
            <p
              className="relative w-full shrink-0 text-[35px] leading-normal text-[#2c2b2a]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              All your vendors in one place
            </p>
            <p
              className="relative w-full shrink-0 text-[20px] leading-[1.11] text-[#9a958b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Communicate with all your vendors for ordering seamlessly, with lead times, delivery schedules, and
              pickup differences accounted for.
            </p>
          </div>
          <FeatureVisual
            assets={d}
            className="relative flex h-[325px] w-[508px] shrink-0 flex-col items-start gap-[25px] overflow-hidden rounded-[20px] border border-solid border-[rgba(154,149,139,0.25)] bg-white p-[25px]"
            property1="Feature3"
          />
        </div>
      </div>
      <div className="absolute left-[337px] top-[3458px] flex w-[837px] flex-col items-center gap-[75px]">
        <div className="relative flex w-full shrink-0 flex-col items-center gap-[25px] text-center font-medium">
          <div className="relative flex w-full shrink-0 flex-col items-start gap-[15px]">
            <p className="relative w-full shrink-0 font-mono text-[18px] uppercase leading-[1.11] text-[#718d53]">
              let’s connect
            </p>
            <p
              className="relative w-full shrink-0 text-[50px] leading-normal text-[#2c2b2a]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Spend less time guessing orders, and more time running your cafe.
            </p>
          </div>
          <p
            className="relative w-[757px] shrink-0 text-[25px] leading-[1.11] text-[#9a958b]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Explore how Trove can reduce losses, simplify ordering, and help you make more confident decisions day to
            day.
          </p>
        </div>
        <div className="relative flex shrink-0 items-center gap-[24px]">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#718d53] px-[15px] py-[5px]"
          >
            <span
              className="relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.5] text-[#faf5dd]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Book a demo
            </span>
          </a>
          <a
            href={MAILTO}
            className="relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#faf5dd] px-[15px] py-[5px]"
          >
            <span
              className="relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.5] text-[#718d53]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Shoot us an email
            </span>
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 flex w-[1512px] -translate-x-1/2 items-center justify-between px-[75px] pb-[50px] pt-[75px]">
        <div className="relative h-[40px] w-[29px] shrink-0">
          <img alt="Trove" className="absolute inset-0 block size-full max-w-none" src={d.logoNav} />
        </div>
        <div className="relative flex shrink-0 items-center gap-[75px]">
          <div className="relative flex shrink-0 items-center gap-[20px]">
            <div className="relative size-[15px] shrink-0">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={activeSection === "features" ? d.selectFill : d.selectStroke}
              />
            </div>
            <button
              type="button"
              className={`relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.11] ${
                activeSection === "features" ? "text-[#718d53]" : "text-[#9a958b]"
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => onSelectSection("features")}
            >
              Features
            </button>
          </div>
          <div className="relative flex shrink-0 items-center gap-[20px]">
            <div className="relative size-[15px] shrink-0">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={activeSection === "faq" ? d.selectFill : d.selectStroke}
              />
            </div>
            <button
              type="button"
              className={`relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.11] ${
                activeSection === "faq" ? "text-[#718d53]" : "text-[#9a958b]"
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => onSelectSection("faq")}
            >
              FAQ
            </button>
          </div>
          <div className="relative flex shrink-0 items-center gap-[20px]">
            <div className="relative size-[15px] shrink-0">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={activeSection === "contact" ? d.selectFill : d.selectStroke}
              />
            </div>
            <button
              type="button"
              className={`relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.11] ${
                activeSection === "contact" ? "text-[#718d53]" : "text-[#9a958b]"
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => onSelectSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#718d53] px-[15px] py-[5px]"
        >
          <span
            className="relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.5] text-[#faf5dd]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Book a demo
          </span>
        </a>
      </div>
      <DesktopFaq assets={d} />
      <div className="absolute left-1/2 top-[4050px] flex w-[1212px] -translate-x-1/2 items-center justify-between">
        <div className="relative flex w-[481px] shrink-0 flex-col items-start gap-[25px]">
          <div className="relative h-[35px] w-[154px] shrink-0">
            <img alt="Trove" className="absolute inset-0 block size-full max-w-none" src={d.logoFooter} />
          </div>
          <p
            className="relative w-full min-w-full shrink-0 text-[25px] font-medium leading-[1.11] text-[#9a958b]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            The end-to-end, back-of-house platform built for perishable-first businesses.
          </p>
        </div>
        <div className="relative flex shrink-0 flex-col items-end justify-center gap-[25px] text-[20px] font-medium leading-[1.11] text-[#576e42]">
          <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Features
          </p>
          <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            FAQ
          </p>
          <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Contact
          </p>
        </div>
      </div>
      <div className="absolute left-[150px] top-[302px] flex flex-col items-start justify-end gap-[75px]">
        <div className="relative flex w-full shrink-0 flex-col items-start gap-[35px]">
          <div className="relative flex shrink-0 items-center gap-[15px]">
            <LilDrink assets={d} className="relative h-[75px] w-[45px] shrink-0" property1="Yihan/Default" />
            <LilDrink assets={d} className="relative h-[75px] w-[45px] shrink-0" property1="Josh/Default" />
            <LilDrink assets={d} className="relative h-[75px] w-[45px] shrink-0" />
            <LilDrink assets={d} className="relative h-[75px] w-[45px] shrink-0" property1="Ria/Default" />
          </div>
          <div className="relative flex w-[586px] shrink-0 flex-col items-start gap-[25px] font-medium">
            <p
              className="relative w-full min-w-full shrink-0 text-[50px] leading-normal text-[#2c2b2a]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Take the guesswork out of ordering for your cafe
            </p>
            <p
              className="relative w-[481px] shrink-0 text-[25px] leading-[1.11] text-[#9a958b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              The end-to-end, back-of-house platform built for perishable-first businesses.
            </p>
          </div>
        </div>
        <div className="relative flex shrink-0 items-center gap-[24px]">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#576e42] px-[15px] py-[5px]"
          >
            <span
              className="relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.5] text-[#faf5dd]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Get Started
            </span>
          </a>
          <a
            href={MAILTO}
            className="relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#faf5dd] px-[15px] py-[5px]"
          >
            <span
              className="relative shrink-0 whitespace-nowrap text-[20px] font-medium leading-[1.5] text-[#576e42]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Contact us
            </span>
          </a>
        </div>
      </div>
      <div className="absolute left-[calc(50%+521.5px)] top-[223px] h-[603px] w-[929px] -translate-x-1/2">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={d.inventorySpreadsheet}
        />
      </div>
    </div>
  );
}

export default function LandingDesktop() {
  const [scale, setScale] = useState(1);
  const [activeSection, setActiveSection] = useState<DesktopSection>("features");

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESKTOP_FRAME_W));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scaledH = DESKTOP_FRAME_H * scale;

  const scrollToSection = (section: DesktopSection) => {
    setActiveSection(section);
    const y = DESKTOP_SECTION_Y[section];
    window.scrollTo({ top: y * scale, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden bg-white" style={{ minHeight: scaledH }}>
      <div
        className="mx-auto"
        style={{
          width: DESKTOP_FRAME_W * scale,
          height: scaledH,
          overflow: "hidden",
        }}
      >
        <div
          className="font-sans text-[#2c2b2a] antialiased"
          style={{
            width: DESKTOP_FRAME_W,
            height: DESKTOP_FRAME_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <DesktopCanvas activeSection={activeSection} onSelectSection={scrollToSection} />
        </div>
      </div>
    </div>
  );
}
