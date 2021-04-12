import BasicHeader from "../Navigation/BasicHeader";
import Head from "next/head";

function BasicLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Alex Glick</title>
      </Head>

      <BasicHeader />
      {children}
    </div>
  );
}

export default BasicLayout;
