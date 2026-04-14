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
  anushka: "https://www.figma.com/api/mcp/asset/bdb811ca-0a1b-4f56-b7a9-c42f613b2724",
  josh: "https://www.figma.com/api/mcp/asset/235eea84-9f80-4da5-a4b8-63e56d905414",
  yihan: "https://www.figma.com/api/mcp/asset/e072a52e-f110-4862-8980-6430a2057200",
  ria: "https://www.figma.com/api/mcp/asset/d2807679-51d7-49cc-8854-09b7692df9d2",
  image8: "https://www.figma.com/api/mcp/asset/90a517ed-a1ed-4c76-b137-2a5daa96dbb7",
  image9: "https://www.figma.com/api/mcp/asset/c977a9d8-2ac4-40c9-846f-3114e628b385",
  image10: "https://www.figma.com/api/mcp/asset/b2ac56cc-f4b0-4e5a-9a42-2cae5c03e7fe",
  image11: "https://www.figma.com/api/mcp/asset/fcc02373-982c-4d78-9bc2-800e63c1332c",
  image12: "https://www.figma.com/api/mcp/asset/17567822-93e8-4c07-8af0-ae433006a19b",
  pdfIcon: "https://www.figma.com/api/mcp/asset/62c1e2a1-df01-49a7-93b3-01a884a06189",
  icon: "https://www.figma.com/api/mcp/asset/aecf6150-eb65-4c6c-aeaa-cb4b0e8da952",
  icon1: "https://www.figma.com/api/mcp/asset/1c327a1a-0bad-4f18-8123-17d725cef41b",
  ellipse27: "https://www.figma.com/api/mcp/asset/a0e45a2e-8f20-4c52-90c0-7fc9ef00919b",
  icon2: "https://www.figma.com/api/mcp/asset/627d10f2-9269-4282-b2ad-302ac0ff8981",
  salesData: "https://www.figma.com/api/mcp/asset/4a5cfb64-e536-4e2a-bd65-178009850f5e",
  inventorySpreadsheet: "https://www.figma.com/api/mcp/asset/1760b355-e194-4946-a91d-eb6cde31f7a4",
  ellipse28: "https://www.figma.com/api/mcp/asset/f57437c7-359b-4e3a-90e5-73545cd15b9e",
  wordmark: "https://www.figma.com/api/mcp/asset/e19bcdad-e10e-4909-85d1-5b656caab513",
  logoNav: "https://www.figma.com/api/mcp/asset/adefa239-4120-4583-98ad-f7aac97ff216",
  selectFill: "https://www.figma.com/api/mcp/asset/8c96afa4-d847-46a6-b4f9-e5713c36089c",
  selectStroke: "https://www.figma.com/api/mcp/asset/3292f9ea-8388-430b-958f-7c130620bac5",
  logoFooter: "https://www.figma.com/api/mcp/asset/4f27bd3e-e057-474e-9794-5c777a73fb62",
  chevronDown: "https://www.figma.com/api/mcp/asset/fe45953d-0066-4f04-a2c8-f4b684de1c6c",
  chevronUp: "https://www.figma.com/api/mcp/asset/7093e4f4-9256-481b-83c0-39754667f997",
};

export const DESKTOP_FRAME_W = 1512;
export const DESKTOP_FRAME_H = 4944;
