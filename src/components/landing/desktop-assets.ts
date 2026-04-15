import type { TroveFeatureAssets } from "./trove-feature-assets";

export type DesktopPageAssets = TroveFeatureAssets & {
  inventorySpreadsheet: string;
  ellipse28: string;
  wordmark: string;
  logoNav: string;
  selectFill: string;
  selectStroke: string;
  logoFooter: string;
  chevronDown: string;
  chevronUp: string;
};

/** Figma MCP asset URLs (desktop frame 460:779) — refresh from MCP if expired. */
export const desktopAssets: DesktopPageAssets = {
  anushka: "/figma/desktop-anushka.svg",
  josh: "/figma/desktop-josh.svg",
  yihan: "/figma/desktop-yihan.svg",
  ria: "/figma/desktop-ria.svg",
  image8: "/figma/desktop-image8.png",
  image9: "/figma/desktop-image9.png",
  image10: "/figma/desktop-image10.png",
  image11: "/figma/desktop-image11.png",
  image12: "/figma/desktop-image12.png",
  pdfIcon: "/figma/desktop-pdf-icon.svg",
  icon: "/figma/desktop-check.svg",
  icon1: "/figma/desktop-close.svg",
  ellipse27: "/figma/desktop-ellipse27.svg",
  icon2: "/figma/desktop-edit.svg",
  salesData: "/figma/desktop-salesData.svg",
  inventorySpreadsheet: "/figma/desktop-inventorySpreadsheet.png",
  ellipse28: "/figma/desktop-ellipse28.png",
  wordmark: "/figma/desktop-wordmark.svg",
  logoNav: "/figma/desktop-logoNav.svg",
  selectFill: "/figma/desktop-selectFill.svg",
  selectStroke: "/figma/desktop-selectStroke.svg",
  logoFooter: "/figma/desktop-logoFooter.svg",
  chevronDown: "/figma/desktop-chevronDown.svg",
  chevronUp: "/figma/desktop-chevronUp.svg",
};

export const DESKTOP_FRAME_W = 1512;
export const DESKTOP_FRAME_H = 4300;
