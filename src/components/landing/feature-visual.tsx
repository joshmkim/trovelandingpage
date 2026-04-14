import type { TroveFeatureAssets } from "./trove-feature-assets";

export type FeatureVisualProps = {
  className?: string;
  property1?: "Feature1" | "Feature1-B" | "Feature2" | "Feature3";
  assets: TroveFeatureAssets;
};

export function FeatureVisual({
  className,
  property1 = "Feature1",
  assets: a,
}: FeatureVisualProps) {
  const isFeature1 = property1 === "Feature1";
  const isFeature2 = property1 === "Feature2";
  const isFeature3 = property1 === "Feature3";
  return (
    <div
      className={
        className ||
        `relative flex h-[325px] w-[508px] flex-col overflow-hidden rounded-[20px] border border-solid border-[rgba(154,149,139,0.25)] p-[25px] ${
          isFeature3
            ? "items-start gap-[25px] bg-white"
            : isFeature2
              ? "items-start justify-center gap-[10px] bg-[#fdfbf8]"
              : "items-center gap-[100px] bg-[#fdfbf8]"
        }`
      }
    >
      {isFeature1 && (
        <>
          <div className="relative flex shrink-0 flex-col items-center gap-[10px] py-[40px]">
            <div className="relative flex shrink-0 items-start gap-[80px] rounded-[10px] border border-[rgba(154,149,139,0.35)] bg-white px-[20px] py-[15px]">
              <div className="relative flex shrink-0 items-end gap-[20px]">
                <div className="relative flex shrink-0 items-center gap-[15px]">
                  <div className="relative size-[36px] shrink-0">
                    <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.pdfIcon} />
                  </div>
                  <div className="relative flex w-[113px] shrink-0 flex-col items-start text-[16px] leading-[1.5]">
                    <p
                      className="relative w-full shrink-0 font-medium text-[#2c2b2a]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Invoice_691.pdf
                    </p>
                    <p
                      className="relative w-full shrink-0 font-normal text-[#958f84]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      20 MB / 20 MB
                    </p>
                  </div>
                </div>
                <div className="relative flex shrink-0 items-center gap-[5px]">
                  <div className="relative size-[14px] shrink-0 overflow-hidden">
                    <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                      <div className="absolute inset-[-11.69%_-8.04%]">
                        <img alt="" className="block size-full max-w-none" src={a.icon} />
                      </div>
                    </div>
                  </div>
                  <p
                    className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.5] text-[#718d53]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Completed
                  </p>
                </div>
              </div>
              <div className="relative size-[16px] shrink-0 overflow-hidden">
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-9.38%]">
                    <img alt="" className="block size-full max-w-none" src={a.icon1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-col items-start gap-[10px] rounded-[10px] border border-[rgba(154,149,139,0.35)] bg-white px-[20px] py-[15px]">
              <div className="relative flex w-[380px] shrink-0 items-start justify-between">
                <div className="relative flex shrink-0 items-end gap-[10px]">
                  <div className="relative flex shrink-0 items-center gap-[15px]">
                    <div className="relative size-[36px] shrink-0">
                      <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.pdfIcon} />
                    </div>
                    <div className="relative flex w-[113px] shrink-0 flex-col items-start text-[16px] leading-[1.5]">
                      <p
                        className="relative w-full shrink-0 font-medium text-[#2c2b2a]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Invoice_237.pdf
                      </p>
                      <p
                        className="relative w-full shrink-0 font-normal text-[#958f84]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        20 MB / 20 MB
                      </p>
                    </div>
                  </div>
                  <div className="relative flex shrink-0 items-center gap-[7px]">
                    <div className="relative size-[12px] shrink-0">
                      <div className="absolute inset-[-6.25%]">
                        <img alt="" className="block size-full max-w-none" src={a.ellipse27} />
                      </div>
                    </div>
                    <p
                      className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.5] text-[#958f84]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Uploading
                    </p>
                  </div>
                </div>
                <div className="relative size-[16px] shrink-0 overflow-hidden">
                  <div className="absolute inset-1/4">
                    <div className="absolute inset-[-9.38%]">
                      <img alt="" className="block size-full max-w-none" src={a.icon1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full shrink-0 items-center justify-between">
                <div className="relative h-[4px] w-[335px] shrink-0 overflow-hidden rounded-[12px]">
                  <div className="absolute left-0 top-0 h-[4px] w-[335px] bg-[#dfdbd2]" />
                  <div className="absolute left-0 top-0 h-[4px] w-[290px] bg-[#718d53]" />
                </div>
                <p
                  className="relative shrink-0 whitespace-nowrap text-[14px] leading-[1.5] tracking-[-0.154px] text-[#2c2b2a]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  75%
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px]">
            <div className="relative flex w-full shrink-0 items-center justify-between overflow-hidden border-t border-[rgba(154,149,139,0.35)] bg-white px-[20px] py-[15px]">
              <div className="relative flex w-[250px] shrink-0 items-center gap-[20px]">
                <div className="relative size-[50px] shrink-0 rounded-[12px] border border-solid border-[#dfdbd2]">
                  <img
                    alt=""
                    className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                    src={a.image8}
                  />
                </div>
                <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap leading-[1.5] text-[#2c2b2a]">
                  <p className="relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Unsalted Butter
                  </p>
                  <p
                    className="relative shrink-0 text-[16px] tracking-[-0.176px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    48 remaining
                  </p>
                </div>
              </div>
              <div className="relative flex w-[146px] shrink-0 flex-col items-center gap-[10px]">
                <p
                  className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.5] tracking-[-0.176px] text-[#2c2b2a]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  High
                </p>
                <div className="relative h-[4px] w-full shrink-0 overflow-hidden rounded-[12px]">
                  <div className="absolute left-0 top-0 h-[9px] w-[146px] bg-[#dfdbd2]" />
                  <div className="absolute left-0 top-0 h-[9px] w-[133px] bg-[#576e42]" />
                </div>
              </div>
            </div>
            <div className="relative flex w-full shrink-0 items-center justify-between overflow-hidden border-t border-[rgba(154,149,139,0.35)] bg-white px-[20px] py-[15px]">
              <div className="relative flex w-[250px] shrink-0 items-center gap-[20px]">
                <div className="relative size-[50px] shrink-0 rounded-[12px] border border-solid border-[#dfdbd2]">
                  <img
                    alt=""
                    className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                    src={a.image9}
                  />
                </div>
                <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap leading-[1.5] text-[#2c2b2a]">
                  <p className="relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Heavy Cream
                  </p>
                  <p
                    className="relative shrink-0 text-[16px] tracking-[-0.176px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    30 remaining
                  </p>
                </div>
              </div>
              <div className="relative flex w-[146px] shrink-0 flex-col items-center gap-[10px]">
                <p
                  className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.5] tracking-[-0.176px] text-[#2c2b2a]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  High
                </p>
                <div className="relative h-[4px] w-full shrink-0 overflow-hidden rounded-[12px]">
                  <div className="absolute left-0 top-0 h-[9px] w-[146px] bg-[#dfdbd2]" />
                  <div className="absolute left-[0.5px] top-0 h-[9px] w-[97px] bg-[#576e42]" />
                </div>
              </div>
            </div>
            <div className="relative flex w-full shrink-0 items-center justify-between overflow-hidden border-t border-[rgba(154,149,139,0.35)] bg-white px-[20px] py-[15px]">
              <div className="relative flex w-[250px] shrink-0 items-center gap-[20px]">
                <div className="relative size-[50px] shrink-0 rounded-[12px] border border-solid border-[#dfdbd2]">
                  <img
                    alt=""
                    className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                    src={a.image10}
                  />
                </div>
                <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap leading-[1.5] text-[#2c2b2a]">
                  <p className="relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Free-range Eggs
                  </p>
                  <p
                    className="relative shrink-0 text-[16px] tracking-[-0.176px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    6 remaining
                  </p>
                </div>
              </div>
              <div className="relative flex w-[146px] shrink-0 flex-col items-center gap-[10px]">
                <p
                  className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.5] tracking-[-0.176px] text-[#2c2b2a]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Low
                </p>
                <div className="relative h-[4px] w-full shrink-0 overflow-hidden rounded-[12px]">
                  <div className="absolute left-0 top-0 h-[9px] w-[146px] bg-[#dfdbd2]" />
                  <div className="absolute left-[0.5px] top-0 h-[9px] w-[28px] bg-[#576e42]" />
                </div>
              </div>
            </div>
            <div className="relative flex w-full shrink-0 items-center justify-between overflow-hidden border-t border-[rgba(154,149,139,0.35)] bg-white px-[20px] py-[15px]">
              <div className="relative flex w-[250px] shrink-0 items-center gap-[20px]">
                <div className="relative size-[50px] shrink-0 rounded-[12px] border border-solid border-[#dfdbd2]">
                  <img
                    alt=""
                    className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                    src={a.image11}
                  />
                </div>
                <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap leading-[1.5] text-[#2c2b2a]">
                  <p className="relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Vanilla Extract
                  </p>
                  <p
                    className="relative shrink-0 text-[16px] tracking-[-0.176px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    22 remaining
                  </p>
                </div>
              </div>
              <div className="relative flex w-[146px] shrink-0 flex-col items-center gap-[10px]">
                <p
                  className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.5] tracking-[-0.176px] text-[#2c2b2a]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  High
                </p>
                <div className="relative h-[4px] w-full shrink-0 overflow-hidden rounded-[12px]">
                  <div className="absolute left-0 top-0 h-[9px] w-[146px] bg-[#dfdbd2]" />
                  <div className="absolute left-0 top-0 h-[9px] w-[115px] bg-[#576e42]" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isFeature2 && (
        <div className="relative flex shrink-0 flex-col items-center justify-center gap-[20px] rounded-[10px] border border-[rgba(154,149,139,0.25)] bg-white px-[15px] pb-[20px] pt-[15px]">
          <div className="relative flex shrink-0 flex-col items-center gap-[10px]">
            <div className="relative flex shrink-0 items-center gap-[10px]">
              <div className="relative size-[16px] shrink-0 overflow-hidden">
                <div className="absolute inset-[7.83%_7.83%_8.33%_8.33%]">
                  <div className="absolute inset-[-5.59%]">
                    <img alt="" className="block size-full max-w-none" src={a.icon2} />
                  </div>
                </div>
              </div>
              <p
                className="relative shrink-0 whitespace-nowrap text-center text-[16px] leading-[1.5] tracking-[-0.176px] text-[#9a958b]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                SKU-ID-1137
              </p>
            </div>
            <div className="relative size-[125px] shrink-0 rounded-[12px] border border-[#d9d9d9] border-solid">
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                src={a.image8}
              />
            </div>
          </div>
          <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap leading-[1.5]">
            <p
              className="relative shrink-0 text-[20px] text-[#2c2b2a]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Unsalted Butter
            </p>
            <div className="relative flex shrink-0 items-start gap-[3px] text-[16px] tracking-[-0.176px]">
              <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                5 lbs
              </p>
              <p className="relative shrink-0 text-[#9a958b]" style={{ fontVariationSettings: "'wdth' 100" }}>
                remaining
              </p>
            </div>
          </div>
        </div>
      )}
      {["Feature2", "Feature3"].includes(property1) && (
        <div
          className={`relative flex shrink-0 items-start ${
            isFeature3 ? "justify-center gap-[25px]" : "flex-col gap-[10px]"
          }`}
        >
          {isFeature2 && (
            <>
              <div className="relative flex shrink-0 items-center justify-center rounded-[6px] bg-[rgba(145,176,217,0.25)] px-[12px] py-[6px]">
                <p
                  className="relative shrink-0 whitespace-nowrap text-right text-[16px] font-medium leading-normal text-[#576e42]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Will Run Out
                </p>
              </div>
              <div className="relative flex w-full shrink-0 flex-col items-center gap-[4px] rounded-[10px] border border-[rgba(154,149,139,0.25)] bg-white px-[20px] py-[12px] text-[20px] font-medium leading-[1.5] tracking-[-0.22px] whitespace-nowrap">
                <div className="relative flex w-full shrink-0 items-start gap-[4px]">
                  <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    10 lbs
                  </p>
                  <p className="relative shrink-0 text-[#909090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    predicted demand
                  </p>
                </div>
                <div className="relative flex shrink-0 items-start gap-[4px]">
                  <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    12 lbs
                  </p>
                  <p className="relative shrink-0 text-[#909090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    suggested order
                  </p>
                </div>
              </div>
              <div className="relative h-[129px] w-[271px] shrink-0">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.salesData} />
              </div>
            </>
          )}
          {isFeature3 && (
            <>
              <div className="relative size-[50px] shrink-0 rounded-[12px] border border-solid border-[#dfdbd2]">
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[12px] object-cover"
                  src={a.image12}
                />
              </div>
              <div className="relative flex shrink-0 flex-col items-start whitespace-nowrap leading-[1.5]">
                <p
                  className="relative shrink-0 text-[20px] text-[#2c2b2a]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  All-Purpose Flour Supply
                </p>
                <div className="relative flex shrink-0 items-start gap-[3px] text-[16px] tracking-[-0.176px]">
                  <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    86%
                  </p>
                  <p className="relative shrink-0 text-[#9a958b]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    reliability
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {isFeature3 && (
        <>
          <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px]">
            <p
              className="relative shrink-0 whitespace-nowrap text-[16px] font-medium leading-[1.5] tracking-[-0.176px] text-[#9a958b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Outreach message
            </p>
            <div className="relative flex w-full shrink-0 flex-col items-start rounded-[10px] border border-[rgba(154,149,139,0.25)] bg-white px-[20px] py-[12px]">
              <p
                className="relative w-full shrink-0 text-[16px] font-medium leading-[1.5] tracking-[-0.176px] text-[#2c2b2a]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Hi All-Purpose Flour Supply. We’d love to get a quote and lead times for All-Purpose Flour @
                2.75/bag. Thank you :-)
              </p>
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px] whitespace-nowrap leading-[1.5]">
            <p
              className="relative shrink-0 text-[16px] tracking-[-0.176px] text-[#9a958b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Primary contact
            </p>
            <div className="relative flex w-full shrink-0 items-start justify-center gap-[25px] rounded-[10px] border border-[rgba(154,149,139,0.25)] bg-white px-[20px] py-[12px] text-[20px] font-medium tracking-[-0.22px]">
              <div className="relative flex shrink-0 items-start gap-[4px]">
                <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  5
                </p>
                <p className="relative shrink-0 text-[#909090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  days lead time
                </p>
              </div>
              <div className="relative flex shrink-0 items-start gap-[4px]">
                <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  6
                </p>
                <p className="relative shrink-0 text-[#909090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  hour response
                </p>
              </div>
              <div className="relative flex shrink-0 items-start gap-[4px]">
                <p className="relative shrink-0 text-[#2c2b2a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  $2.75
                </p>
                <p className="relative shrink-0 text-[#909090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  /bag
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
