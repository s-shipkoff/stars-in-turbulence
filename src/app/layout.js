import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Stars In Turbulence",
  description:
    "Origin of Massive Stars (ORMAS), star formation, ISM turbulence, planet formation, publications, and educational videos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        {/* pt-16 clears the fixed navbar (h-16). */}
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
