/**
 *
 * CSS variables that can be used everywhere.
 * we add -dec to be used in rgba function :.
 * ```css
 * border-color: rgba(var(--dark-dec), 0.1)
 * ```
 */
export const generateCSSVariables = (colors: Record<string, string>) => {
  const cssVariables: Record<string, string> = {};

  for (const [name, color] of Object.entries(colors)) {
    if (!/^#[0-9A-Fa-f]{6}$/.test(color))
      throw new Error(`Invalid color '${color}'`);

    cssVariables[`--${name}`] = color;
    cssVariables[`--${name}-dec`] = colorHexToDec(color);
  }

  return cssVariables;
};

const colorHexToDec = (hex: string) => {
  return hex
    .replace(/^#/, "")
    .match(/.{2}/g)
    ?.map(hexToDec)
    .join(",") as string;
};

const hexToDec = (hex: string) => parseInt(hex, 16);
