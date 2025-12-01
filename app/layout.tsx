import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Weismann - Portfolio",
  description: "Personal portfolio and blog",
  icons: {
    icon: {
      url: "/favicon.webp",
      type: "image/webp"
    }
  }
};

export const viewport = {
    themeColor : "#a78bfa",
}
const themeInitScript = `
  (function() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />          <ThemeToggle />
          {children}
        </ThemeProvider>

        <footer className="mt-32 mb-12 text-center text-sm text-muted">
          © {new Date().getFullYear()} Sahazel. All rights reserved.
        </footer>
        {process.env.NODE_ENV === "production" && <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5dc57cc4-8782-4261-a9d7-4eb55f7fc0e5"
          strategy="lazyOnload"
        />}
      </body>
    </html>
  );
}
