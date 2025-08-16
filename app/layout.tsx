import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "@/components/shared/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoVision",
  description: "Real-Time Crypto Details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const bgCss:string= "bg-[url('/images/banner.png')] bg-no-repeat bg-cover bg-top bg-fixed w-full h-screen backdrop-blur-2xl"
  return (
    
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!} >
      <html lang="en" suppressHydrationWarning>
      <SpeedInsights/>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
          >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            
            disableTransitionOnChange
            >
            <Navbar />
            
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
