import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { personalInfo } from "./lib/data";
import { ThemeProvider } from "./components/ThemeProvider";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - Portfolio`,
  description: personalInfo.title,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rajdhani.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
