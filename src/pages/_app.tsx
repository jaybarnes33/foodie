import Head from "next/head";
import "../styles/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Food Delivery Pizza Tarkwa Ghana University of Mines and Technology Jollof Banku Tilapia"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          href="/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icon-256x256.png"
          rel="icon"
          type="image/png"
          sizes="256x256"
        />
        <link
          href="/icon-384x384.png"
          rel="icon"
          type="image/png"
          sizes="384x384"
        />
        <link
          href="/icon-512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
