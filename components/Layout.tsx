import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const meta = {
  title: "Diogo Verde – Developer",
  description: ``,
  type: "website",
};

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />

        <meta name="twitter:site" content="@diogo__verde" />
        <meta name="twitter:title" content={meta.title} />
      </Head>
      <Header />

      <main className="flex flex-col items-center justify-center  py-2">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
