import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"
import "@/styles/main.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const App: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Carlo D'Ugo</title>
    </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
