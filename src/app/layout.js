import { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const SmoothScroll = dynamic(() => import("./SmoothScroll"));
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});
export const metadata = {
  title: {
    default:
      "i-Connectresources | Enterprise IT Solutions & Digital Transformation",
    template: "%s | i-Connectresources",
  },
  description:
    "i-Connectresources delivers enterprise automation, ServiceNow solutions, cloud infrastructure, and digital transformation services for businesses worldwide.",
  openGraph: {
    title: "i-Connectresources",
    description: "Enterprise IT Solutions & Digital Transformation",
    url: "https://www.i-connectresources.com",
    siteName: "i-Connectresources",
    type: "website",
  },
  keywords: [
    "i-Connectresourses inc",
    "i-Connectresourses.pvt.ltd",
    "i-Connect",
    "i-Connectresources",
    "IT services",
    "IT service management",
    "Workflow automation",
    "Microsoft 365 enablement",
    "Power Platform enablement",
    "Salesforce automation",
    "Appian automation",
    "AI and GenAI automation",
    "Cloud modernization",
    "Infrastructure modernization",
    "	Data modernization",
    "Custom software development",
    "Data engineering solutions",
    "Government IT services",
    "Healthcare IT solutions",
    "Enterprise IT solutions",
    "Scalable IT services",
    "Enterprise automation",
    "Digital transformation",
    "Intelligent workflow automation",
    "Business impact solutions",
    "Real-world business outcomes",
    "	Outcome-driven approach",
    "Automation-first",
    "Flexible engagements",
    "Scalable IT solutions",
    "System integrations",
    "End-to-end IT expertise",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7DFMS3C27"
          strategy="afterInteractive"
        />
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7DFMS3C27');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
