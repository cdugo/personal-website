import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"
import "@/styles/main.css";
import Navbar from "@/components/Navbar";

const App: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
