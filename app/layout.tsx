import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jovin Shija | Software Developer",
  description:
    "Explore the portfolio of Jovin Shija, a passionate Software Developer & UI/UX Designer. Crafting immersive digital wonders using JavaScript, React.js, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-[--background] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
