import { Roboto } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/Navbar";
import ThemeContextProvider from "@/context/theme-context";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.className} font-Roboto antialiased leading-8 overflow-x-hidden bg-gray-100 text-lightPrimary dark:bg-slate-900 dark:text-slate-300 transition-colors duration-300`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
