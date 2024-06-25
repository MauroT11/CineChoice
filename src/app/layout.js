import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';

const prompt = Prompt({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "CineChoice",
  description: "Where Every Frame Tells a Story",
};

export default async function RootLayout({ children }) {

  const user = await currentUser();
  const username = user?.username;
  const userId = user?.id;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={prompt.className}>
          <Header username={username} userId={userId} />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
    
  );
}
