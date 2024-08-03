import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digismile Clinic",
  description:
    "Discover top-notch dental care at Digismile. Our experienced team offers a range of services, including preventive, restorative, and cosmetic dentistry, tailored to meet your needs. Enjoy a comfortable and personalized experience with the latest technology. Schedule your appointment today for a healthier, brighter smile!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
