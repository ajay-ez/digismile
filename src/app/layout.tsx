import {
  Inter,
  Atkinson_Hyperlegible,
  Bangers,
  League_Spartan,
  Fredoka,
  Poppins,
  Nunito_Sans,
  Bokor,
  Merriweather,
  Josefin_Sans,
  Noto_Sans,
  Raleway
} from "next/font/google";
import "./globals.css";
import React from "react";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider"; // Import ThemeProvider
import Script from "next/script";

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

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"] // Specify the required font weights
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: ["400", "600"] // Specify the required font weights
});

const bokor = Bokor({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bokor",
  weight: "400" // Bokor typically supports a single weight
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["300", "400", "700"] // Specify weights based on usage
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans"
});

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans"
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${atkinson.variable} ${bangers.variable} ${league.variable} ${fredoka.variable} ${poppins.variable} ${nunito.variable} ${bokor.variable} ${merriweather.variable} ${josefin.variable} ${noto.variable} ${raleway.variable}`}
    >
      <head>
        <Script id="chatbot-config" strategy="beforeInteractive">
          {`
            window.embeddedChatbotConfig = {
              chatbotId: "1ZYPlrW9E56Qhv7BVhwjH",
              domain: "www.chatbase.co"
            };
          `}
        </Script>

        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body className="font-poppins digismile-global">
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
