import Header from "@/components/common/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";
import AuthContext from "./context/AuthContext";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `Giyoun's Blog`,
    template: `Giyoun's Blog | %s`,
  },
  description: "프론트엔드 개발자, 오기윤",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "fS14S54kv28n_dVv2w0VAN16zIS5T62cSDDvYm7Pius",
    other: {
      "naver-site-verification": "6c53674e24675efbf7f26498b4eab73539484b7f",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <head>
        <meta
          name="google-site-verification"
          content="fS14S54kv28n_dVv2w0VAN16zIS5T62cSDDvYm7Pius"
        />
      </head>
      <body className="flex flex-col w-full max-w-screen-3xl mx-auto" >
        <AuthContext>
          <Header />
          <main className="grow m-5">{children}</main>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
