import { Sora, Epilogue, Inconsolata } from "next/font/google";

// Configure each font
export const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-epilogue",
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
});
