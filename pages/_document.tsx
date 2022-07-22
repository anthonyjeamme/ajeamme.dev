import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="icon" type="image/png" href="/icons/icon-48x48.png" /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/icon-192x192.png"
          /> */}
          <meta name="theme-color" content="#5d6bbb" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
