import { tokensStyles } from "./styles/tokens.js";
import { navigationStyles } from "./styles/navigationStyles.js";
import { headerStyles } from "./styles/headerStyles.js";
import { historyStyles } from "./styles/historyStyles.js";
import { welcomeStyles } from "./styles/welcomeStyles.js";
import { responsiveStyles } from "./styles/responsiveStyles.js";

/**
 * Aggregated CSS stylesheet for all Noël template surfaces.
 * Split into domain-specific style modules for maintainability.
 */
export const surfaceStyles = [
  tokensStyles,
  navigationStyles,
  headerStyles,
  historyStyles,
  welcomeStyles,
  responsiveStyles,
].join("\n");
