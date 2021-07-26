import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useTheme } from "next-themes";

const meta = {
  title: "Diogo Verde – Developer",
  description: ``,
  type: "website",
};

export const Layout: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-gray-700 h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />

        <meta name="twitter:site" content="@diogo__verde" />
        <meta name="twitter:title" content={meta.title} />
      </Head>
      <Header />

      <main className="flex flex-col justify-center text-black dark:text-white px-8">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
