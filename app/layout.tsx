import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Righteous Ogidan | Software Engineer & React Developer",
  description:
    "Portfolio of Righteous Ogidan, a software engineer building purposeful React, Next.js and TypeScript experiences for businesses and ambitious ideas.",
  keywords: [
    "Righteous Ogidan",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer Nigeria",
  ],
  authors: [{ name: "Righteous Ogidan" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
