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
  icons: {
    icon: [
      {
        url: '/cinechoiceFavicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/cinechoiceFavicon.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: {
      url: '/cinechoiceFavicon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
};

export default async function RootLayout({ children }) {

  const user = await currentUser();
  const userId = user?.id;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={prompt.className}>
          <Header userId={userId} />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
    
  );
}
