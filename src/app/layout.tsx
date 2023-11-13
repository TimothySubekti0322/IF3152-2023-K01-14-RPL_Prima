import type { Metadata } from "next";
import { Inter , Open_Sans} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: 'RPL Prima',
  description: 'Selamat datang di Kursus Mengemudi RPL Prima',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
}
