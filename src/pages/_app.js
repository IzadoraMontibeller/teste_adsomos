import ResponsiveProvider from "@/contexts/ResponsiveProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ResponsiveProvider>
      <Component {...pageProps} />
    </ResponsiveProvider>
  );
}
