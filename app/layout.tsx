import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT SMART NUSA DIGITAL",
  description: "We will come back with a better experience for you!",
  authors: {
    name: "PT SMART NUSA DIGITAL",
    url: "https://www.smartnusa.digital/",
  },
  applicationName: "PT SMART NUSA DIGITAL",
  keywords: ["PT SMART NUSA DIGITAL", "Smart Nusa Digital", "SND", "Technology Company", "Digital Solutions", "Innovation", "Software Development", "IT Services", "Digital Transformation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
