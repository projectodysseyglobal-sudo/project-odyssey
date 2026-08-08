import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://projectodysseyglobal.org"),

  title: {
    default: "Project Odyssey",
    template: "%s | Project Odyssey",
  },

  description:
    "Discover scholarships, internships, competitions, research programs, fellowships, conferences, and global opportunities for students worldwide.",

  authors: [
    {
      name: "VFOUR Technologies",
    },
  ],

  creator: "VFOUR Technologies",

  publisher: "VFOUR Technologies",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://projectodysseyglobal.org",
    siteName: "Project Odyssey",

    title: "Project Odyssey",

    description:
      "Discover scholarships, internships, competitions, research programs, fellowships, conferences, and global opportunities for students worldwide.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Project Odyssey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Project Odyssey",

    description:
      "Discover opportunities and build your future.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
    >
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HD541YHN4S"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HD541YHN4S');
          `}
        </Script>
      </body>
    </html>
  );
}