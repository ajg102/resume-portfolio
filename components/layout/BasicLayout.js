import React from "react";

function BasicLayout({ children }) {
  return (
    <>
      <div className={`w-screen h-screen  bg-red-500 dark:bg-gray-700`}>
        <div className="px-4 md:px-10 mx-auto w-full">{children}</div>
      </div>
    </>
  );
}

export default BasicLayout;
