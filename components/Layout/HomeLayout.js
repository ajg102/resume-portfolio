import Head from "next/head";
import HomeHeader from "../Navigation/HomeHeader";
import HomeFooter from "../Navigation/HomeFooter";

function BasicLayout({ children }) {
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
