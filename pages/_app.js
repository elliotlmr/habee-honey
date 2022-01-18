import "../styles/globals.scss";
import Layout from "../components/globals/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [title, setTitle] = useState("Habee Honey | A Beekeeper Journey");

  useEffect(() => {
    let str =
      router.pathname.substring(1).charAt(0).toUpperCase() +
      router.pathname.substring(1).slice(1);
    str !== ""
      ? setTitle(`Habee Honey | ${str}`)
      : setTitle("Habee Honey | A Beekeeper Journey");
  }, [router, title]);

  return (
    <Layout title={title}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
