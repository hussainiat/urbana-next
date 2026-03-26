import type { Metadata } from "next";
import { Montserrat, Lato, Oswald, Geist } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Add the new fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "URBANA - School of Science",
  description: "Urbana provides quality education and learning opportunities",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${montserrat.variable} ${lato.variable} ${oswald.variable} font-lato antialiased bg-soft-gray text-dark-gray`}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow w-full max-w-[100vw] overflow-x-hidden py-12 md:py-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
