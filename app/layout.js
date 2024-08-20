"use client"

import "./globals.css"
import '@radix-ui/themes/styles.css';
import { Toaster } from "@/components/ui/sonner"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "../components/theme-provider"
import Footer from "../components/ui/footer"
import Navbar from "../components/ui/Navbar"
import { Slide } from "react-awesome-reveal";
import { Box } from "@radix-ui/themes";
import SessionProvider from "../components/SessionProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {



  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Slide>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="relative flex-grow">
                  <Box width="70%" className='px-4 mx-auto mt-5'>
                    {children}
                  </Box>
                </main>
                <Footer />
              </div>
            </Slide>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
