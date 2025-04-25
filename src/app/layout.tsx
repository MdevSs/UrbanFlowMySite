import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Header from "./ui/components/header/header";
import { Footer } from "./ui/components/footer/footer";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  weight: ["400","500","600","700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrbanFlow",
  description: "UrbanFlow transporte inteligente, jornada mais rápida!",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout( {children,} : Readonly <{children: React.ReactNode;}> ) {
  
  return (
    <html>
      <body className={`${poppins.variable}`}>
          <Header />
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}