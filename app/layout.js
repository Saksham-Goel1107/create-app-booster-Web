import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DarkModeWrapper from "./actions/DarkMode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "create-app-booster",
  description: "A powerful one step solution tool for creating React applications with Vite and Next.js and with pre-configured tools like Husky, Jest, Prettier, Github CI/CD and Snyk.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeWrapper>
          <div className="flex flex-col min-h-[150rem] w-full overflow-x-hidden" suppressHydrationWarning suppressContentEditableWarning>
            <Navbar/>
            <div className="h-[80px]" />
            <main className="flex-grow w-full pb-16">
              {children}
            </main>
            <div className="mt-auto">
              <Footer/>
            </div>
          </div>
        </DarkModeWrapper>
      </body>
    </html>
  );
}