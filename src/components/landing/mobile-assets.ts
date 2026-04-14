import type { TroveFeatureAssets } from "./trove-feature-assets";

/** Figma MCP asset URLs (mobile frame) — refresh from MCP if expired. */
export const mobileAssets: TroveFeatureAssets & {
  inventorySpreadsheet: string;
  ellipse28: string;
  logoNav: string;
  selectFill: string;
  selectStroke: string;
  wordmark: string;
} = {
  image8: "/figma/mobile-image8.png",
  image9: "/figma/mobile-image9.png",
  image10: "/figma/mobile-image10.png",
  image11: "/figma/mobile-image11.png",
  image12: "/figma/mobile-image12.png",
  pdfIcon: "/figma/mobile-pdfIcon.png",
  icon: "/figma/mobile-check.svg",
  icon1: "/figma/mobile-close.svg",
  ellipse27: "/figma/mobile-ellipse27.svg",
  icon2: "/figma/mobile-edit.svg",
  salesData: "/figma/mobile-salesData.png",
  anushka: "/figma/anushka.svg",
  josh: "/figma/LilDrink%20(2).png",
  yihan: "/figma/LilDrink%20(2).png",
  ria: "/figma/LilDrink%20(2).png",
  inventorySpreadsheet: "/figma/mobile-inventorySpreadsheet.png",
  ellipse28: "/figma/mobile-ellipse28.png",
  logoNav: "/figma/mobile-logoNav.svg",
  selectFill: "/figma/mobile-selectFill.svg",
  selectStroke: "/figma/mobile-selectStroke.svg",
  wordmark: "/figma/mobile-wordmark.svg",
};

export const MOBILE_FRAME_W = 1045;
export const MOBILE_FRAME_H = 4944;
