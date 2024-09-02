import {
  Inter,
  Atkinson_Hyperlegible,
  Bangers,
  League_Spartan,
  Fredoka
} from "next/font/google";
import "./globals.css";
import React from "react";
import { ReduxProvider } from "@/providers/ReduxProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson",
  weight: "400"
});

const bangers = Bangers({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bangers",
  weight: "400"
});

const league = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league"
});

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${atkinson.variable} ${bangers.variable} ${league.variable} ${fredoka.variable}`}
    >
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
