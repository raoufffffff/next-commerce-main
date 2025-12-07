import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server"; // 👈 Added getMessages
import { Navbar } from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Dynamic Metadata Function
// Note: In Next.js 15, params is a Promise. We cannot destructure it in the arguments.
export async function generateMetadata(props) {
  const params = await props.params; // 👈 Await params
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: `%s | ${t("siteName")}`,
      default: t("siteName"),
    },
    description: t("description"),
    keywords: t("keywords").split(","),
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    metadataBase: new URL("https://yourwebsite.com"),

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },

    openGraph: {
      title: t("siteName"),
      description: t("description"),
      url: `https://yourwebsite.com/${locale}`,
      siteName: t("siteName"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("siteName"),
        },
      ],
      locale: locale,
      type: "website",
    },

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

// 2. Root Layout
export default async function RootLayout(props) {
  const params = await props.params; // 👈 Await params here too
  const { locale } = params;
  const { children } = props;

  // Handle Direction (RTL for Arabic)
  const dir = locale == "ar" ? "rtl" : "ltr";
  console.log(locale);

  // 👈 Fetch messages for the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir}>
      <body
        dir={dir}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👈 Pass messages to the provider */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main
            className="bg-white min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900"
          >

            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}   