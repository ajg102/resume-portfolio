import BasicLayout from "@components/Layout/BasicLayout";
import { ReactElement } from "react";

const TallySupport = () => {
  return (
    <div className="w-full flex flex-col  h-full  min-h-screen text-white bg-[#ff943e]">
      <div className=" mt-12 text-center space-y-6">
        <h1 className="font-bold text-2xl">Tally Support</h1>
        <p className="text-lg">
          For support related questions, please email{" "}
          <strong>alexglick102@gmail.com</strong>
        </p>
        <p className="text-xl">Thank you for using Tally!</p>
      </div>
    </div>
  );
};

TallySupport.layout = (page: ReactElement) => <BasicLayout>{page}</BasicLayout>;

export default TallySupport;
