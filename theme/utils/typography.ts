import { Sora, Source_Sans_3 } from "next/font/google";

export const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const soraSansFamily: string = `var(${soraSans.variable}), sans-serif`;
const sourceSans3Family: string = `var(${sourceSans3.variable}), sans-serif`;

export const typography = {
  fontFamily: sourceSans3Family,
  h1: { fontFamily: soraSansFamily },
  h2: { fontFamily: soraSansFamily },
  h3: { fontFamily: soraSansFamily },
  h4: { fontFamily: soraSansFamily },
  h5: { fontFamily: soraSansFamily },
  h6: { fontFamily: soraSansFamily },
  button: { fontFamily: soraSansFamily, textTransform: "none" as const }
}
export type Typography = typeof typography;