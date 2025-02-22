import type { Metadata } from "next";
import { Space_Mono, Poppins } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "frejala",
  description: "This is my personal website.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
