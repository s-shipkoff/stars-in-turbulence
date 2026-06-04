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
  title: "Paolo Padoan — Stars In Turbulence",
  description:
    "Paolo Padoan studies the origin of stars through large-scale simulations of supersonic, magnetized, self-gravitating turbulence in the interstellar medium.",
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
