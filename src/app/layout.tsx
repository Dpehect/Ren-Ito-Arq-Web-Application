import type { Metadata, Viewport } from "next";
import { Inter, Karla } from "next/font/google";
import "@/styles/globals.css";
import { ClientLayout } from "@/components/common/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ren Ito Arq | Architectural Studio",
    template: "%s | Ren Ito Arq"
  },
  description: "Minimalist architectural studio inspired by Ren Ito. Blending functional precision with minimalist aesthetics.",
  keywords: ["architecture", "minimalism", "design", "ren ito", "architectural studio"],
  authors: [{ name: "Ren Ito Arq" }],
  openGraph: {
    title: "Ren Ito Arq | Architectural Studio",
    description: "Minimalist architectural studio inspired by Ren Ito.",
    url: "https://ren-ito-clone.vercel.app",
    siteName: "Ren Ito Arq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ren Ito Arq | Architectural Studio",
    description: "Minimalist architectural studio inspired by Ren Ito.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${karla.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
