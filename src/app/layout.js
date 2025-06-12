import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Motus & Manus",
  description: "Sundhedsordning med fysioterapi",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wpg1bsh.css" />
      </head>
      <body className="min-h-screen font-primary mx-auto">
        <Header />
        <main>{children}</main>
        {/* Din Footer */}
      </body>
    </html>
  );
}
