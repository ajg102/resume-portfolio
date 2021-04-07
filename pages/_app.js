import "../styles/globals.css";
import { useMemo } from "react";
import DarkModeProvider from "../context/DarkModeContext";

function MyApp({ Component, pageProps }) {
  const Layout = useMemo(
    () => Component.layout || (({ children }) => <>{children}</>),
    [Component]
  );
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}

export default MyApp;
