import { Outfit, Ovo, Roboto } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/Navbar";
import ThemeContextProvider from "@/context/theme-context";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

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
        className={`${roboto.className} font-Roboto antialiased leading-8 overflow-x-hidden bg-lightBackground text-lightPrimary dark:bg-darkTheme dark:text-white`}
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
