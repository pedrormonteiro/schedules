import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedule Logger",
  description: "Created using Next.js, React, TypeScript and SCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col container mx-auto md:h-screen md:max-h-screen px-2 md:px-3 2xl:px-0 py-6 bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
