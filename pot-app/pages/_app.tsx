import type { AppProps } from "next/app";
import "../styles/globals.css"; // Importacion de tailwind styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
