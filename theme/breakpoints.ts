export const bp = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1366,
  "2xl": 1600,
} as const;

export const bpConditions = {
  xs: `screen and (min-width: ${bp["xs"]}px)`,
  sm: `screen and (min-width: ${bp["sm"]}px)`,
  md: `screen and (min-width: ${bp["md"]}px)`,
  lg: `screen and (min-width: ${bp["lg"]}px)`,
  xl: `screen and (min-width: ${bp["xl"]}px)`,
  "2xl": `screen and (min-width: ${bp["2xl"]}px)`,
  xsDown: `screen and (max-width: ${bp["xs"] - 1}px)`,
  smDown: `screen and (max-width: ${bp["sm"] - 1}px)`,
  mdDown: `screen and (max-width: ${bp["md"] - 1}px)`,
  lgDown: `screen and (max-width: ${bp["lg"] - 1}px)`,
  xlDown: `screen and (max-width: ${bp["xl"] - 1}px)`,
  "2xlDown": `screen and (max-width: ${bp["2xl"] - 1}px)`,
} as const;
