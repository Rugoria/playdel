import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { QueryProvider } from "@/providers/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lexendDeca = Lexend_Deca({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

export const metadata: Metadata = {
  title: "Playdel - Play Smarter. Improve Faster.",
  description: "Playdel connects players, clubs, and local padel communities. Find partners, book courts, and grow your game.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lexendDeca.variable} font-sans antialiased`}>
        <QueryProvider>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
