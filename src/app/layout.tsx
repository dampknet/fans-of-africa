import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export const metadata = {
  metadataBase: new URL("https://fansofafrica.com"),
  title: {
    default: "Fans of Africa",
    template: "%s | Fans of Africa",
  },
  description:
    "Fans of Africa is a Christian outreach supporting education, teacher training, and infrastructure development in Ghana.",
  openGraph: {
    title: "Fans of Africa",
    description:
      "Supporting education and communities in Ghana through partnership and outreach.",
    url: "https://fansofafrica.com",
    siteName: "Fans of Africa",
    type: "website",
  },
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

