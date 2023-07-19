import { Header } from "@/components/client/header";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/server/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ensō Lab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <Header />
        <main className="flex-col min-h-screen bg-white cursor-point">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
