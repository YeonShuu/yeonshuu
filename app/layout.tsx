import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fireCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YeonShuu",
  description: "YeonShuu's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fireCode.className}>
      <body>{children}</body>
    </html>
  );
}
