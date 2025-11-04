import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamse Mohamed Ismail | Full-Stack Software Engineer",
  description: "Building Digital Experiences That Scale. Full-Stack Software Engineer specializing in modern web & mobile solutions.",
  keywords: ["Full-Stack Developer", "Software Engineer", "Web Development", "Mobile Development", "Django", "React", "Next.js"],
  authors: [{ name: "Hamse Mohamed Ismail" }],
  openGraph: {
    title: "Hamse Mohamed Ismail | Full-Stack Software Engineer",
    description: "Building Digital Experiences That Scale",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/Hs6q84GY/Chat-GPT-Image-Nov-3-2025-12-05-20-AM.png",
        width: 1200,
        height: 630,
        alt: "Hamse Mohamed Ismail",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon_io/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon_io/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon_io/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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

