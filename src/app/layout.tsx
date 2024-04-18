import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

const font = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INferiorLAND Testimonial Section",
  description: "Section where costumer give good comment about company performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  );
}
