import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const prompt = Prompt({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "CineChoice",
  description: "Where Every Frame Tells a Story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
