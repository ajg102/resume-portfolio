import Head from "next/head";
import { ReactNode } from "react";
import BasicHeader from "../Navigation/BasicHeader";

export type LayoutProps = {
  children: ReactNode;
};

function BasicLayout({ children }: LayoutProps) {
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
