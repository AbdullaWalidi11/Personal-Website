import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdulla Walidi | Full-Stack Software Engineer",
    template: "%s | Abdulla Walidi",
  },
  description: "Professional software engineering portfolio of Abdulla Walidi, specializing in modern frontend frameworks (React, Next.js) with robust backend integration (Express, Prisma, PostgreSQL).",
  keywords: [
    "Abdulla Walidi",
    "Software Engineer Portfolio",
    "Full-Stack Developer",
    "React Native",
    "Next.js App Router",
    "TypeScript Engineer",
    "Express API Design",
    "PostgreSQL database",
    "Vitest testing",
    "Riyadh Software Engineer"
  ],
  authors: [{ name: "Abdulla Walidi" }],
  creator: "Abdulla Walidi",
  metadataBase: new URL("https://abdullawalidi.com"), // Replace with your domain when deployed
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullawalidi.com",
    title: "Abdulla Walidi | Full-Stack Software Engineer",
    description: "Specializing in modern frontend frameworks with robust backend integration. Discover projects in web, mobile, and system architecture.",
    siteName: "Abdulla Walidi Portfolio",
    images: [
      {
        url: "/og-image.png", // Preview image template in /public folder
        width: 1200,
        height: 630,
        alt: "Abdulla Walidi Portfolio Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulla Walidi | Full-Stack Software Engineer",
    description: "Specializing in modern frontend frameworks with robust backend integration. Discover projects in web, mobile, and system architecture.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline blocking script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('portfolio-theme');
                const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 bg-grid-pattern">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
