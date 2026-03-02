import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Stars In Turbulence",
  description: "Learn More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}