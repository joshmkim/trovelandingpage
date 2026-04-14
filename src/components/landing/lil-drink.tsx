import type { TroveFeatureAssets } from "./trove-feature-assets";

export type LilDrinkProps = {
  className?: string;
  property1?:
    | "Anushka/Default"
    | "Josh/Default"
    | "Ria/Default"
    | "Yihan/Default";
  assets: TroveFeatureAssets;
};

export function LilDrink({
  className,
  property1 = "Anushka/Default",
  assets: a,
}: LilDrinkProps) {
  const isJosh = property1 === "Josh/Default";
  const isRia = property1 === "Ria/Default";
  const isYihan = property1 === "Yihan/Default";
  return (
    <div className={className ?? "relative h-[75px] w-[45px]"}>
      <div
        className={`absolute flex items-center justify-center ${
          isYihan
            ? "bottom-[4.7px] left-[2.33px] h-[61.295px] w-[40.667px]"
            : isRia
              ? "bottom-[3.79px] left-[1.67px] h-[61.211px] w-[43.333px]"
              : isJosh
                ? "bottom-[5px] left-[calc(50%+0.5px)] h-[61px] w-[42px] -translate-x-1/2"
                : "bottom-[4.68px] left-[calc(50%-0.17px)] h-[61.324px] w-[39.333px] -translate-x-1/2"
        }`}
      >
        <div className="flex-none -scale-y-100 rotate-180">
          {property1 === "Anushka/Default" && (
            <div className="relative h-[61.324px] w-[39.333px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.anushka} />
            </div>
          )}
          {isJosh && (
            <div className="relative h-[61px] w-[42px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.josh} />
            </div>
          )}
          {isRia && (
            <div className="relative h-[61.211px] w-[43.333px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.ria} />
            </div>
          )}
          {isYihan && (
            <div className="relative h-[61.295px] w-[40.667px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={a.yihan} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
