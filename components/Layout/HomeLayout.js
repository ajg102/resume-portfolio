import Head from "next/head";
import HomeHeader from "../Navigation/HomeHeader";

function BasicLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Alex Glick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      {children}
    </div>
  );
}

export default BasicLayout;
