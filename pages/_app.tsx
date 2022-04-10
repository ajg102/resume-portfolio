import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import DarkModeProvider from "../context/DarkModeContext";
import "../styles/globals.css";

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & {
    layout: (page: ReactElement) => ReactNode;
  };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.layout ?? ((page) => page);
  return (
    <DarkModeProvider>
      {getLayout(<Component {...pageProps} />)}
    </DarkModeProvider>
  );
}

export default MyApp;
