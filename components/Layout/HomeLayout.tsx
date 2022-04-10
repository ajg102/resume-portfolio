import Head from "next/head";
import HomeFooter from "../Navigation/HomeFooter";
import HomeHeader from "../Navigation/HomeHeader";
import { LayoutProps } from "./BasicLayout";

function BasicLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <Head>
        <title>Alex Glick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
}

export default BasicLayout;
