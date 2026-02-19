import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";


export const metadata = {
  title: "Fans of Africa",
  description: "Impact projects, volunteering, and community support.",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

