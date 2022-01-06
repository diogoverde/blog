import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            href="/static/favicons/android-chrome-192x192.png"
            rel="android-chrome"
            sizes="192x192"
          />
          <link
            href="/static/favicons/android-chrome-512x512.png"
            rel="android-chrome"
            sizes="512x512"
          />
          <script
            async
            defer
            data-website-id="39181778-2afd-4c58-97e1-053eb01d4759"
            src="https://umami-analytics-qbmrqlmkk-diogoverde.vercel.app/umami.js"
          ></script>
        </Head>
        <body className="bg-white text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
