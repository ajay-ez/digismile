"use client";

import {
  Inter,
  Atkinson_Hyperlegible,
  Bangers,
  League_Spartan,
  Fredoka,
  Poppins,
  Bokor,
  Merriweather,
  Josefin_Sans,
  Noto_Sans,
  Raleway,
  DM_Sans
} from "next/font/google";
import "./global.scss";
import React, { Suspense } from "react";
import Script from "next/script";
import AppWrappers from "./AppWrapper";
import { Provider } from "react-redux";
import store from "@/redux/store";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"] // Specify the required font weights
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body className={`${poppins.className} ${dmSans.className}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <AppWrappers>{children}</AppWrappers>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
