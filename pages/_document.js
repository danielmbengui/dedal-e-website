import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/images/logos/dedale_512x512.png"></link>
    <meta name="theme-color" content="#000" />
      <link
            rel="icon"
            type="image/ico"
            href="/images/favicon.ico"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
