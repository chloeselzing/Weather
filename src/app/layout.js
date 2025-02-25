import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Whiz",
  description: "Weather forecast app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
