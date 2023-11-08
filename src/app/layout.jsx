import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Sidebar from "@/components/sidebar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "@/components/ui/toaster";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PAROMA-MED UI",
  description: "PAROMA-MED User Interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <Sidebar />
          <main className="flex flex-col w-screen p-8">
            <Nav />
            <div className="mt-4">{children}</div>
            <Toaster />
          </main>
        </div>
      </body>
    </html>
  );
}
