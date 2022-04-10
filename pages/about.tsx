import Image from "next/image";
import { ReactElement, SyntheticEvent, useMemo } from "react";
import BasicLayout from "../components/Layout/BasicLayout";
import { calculateAge } from "../lib/functions/calculateAge";

const BIRTHDAY = "11/29/1993";

function AboutPage() {
  const howOldIAm = useMemo(() => calculateAge(BIRTHDAY), []);
  const seeMyWorkHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="w-full flex items-center justify-center text-5xl text-center text-black mt-16 mb-16 md:mb-32">
        <h1>Hi, my name is Alex...</h1>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 mb-16 md:mb-32">
        <div className="col-span-1 flex flex-col items-center my-8 md:my-4">
          <h1 className="text-5xl px-8 text-center">
            Full Stack Developer for Web and Mobile Applications
          </h1>
          <div className="flex flex-col w-full space-y-2 items-center my-6">
            <button
              onClick={seeMyWorkHandler}
              className="rounded-md text-base text-[#f8f9fa] px-6 py-3 bg-blue-600  w-1/2 "
            >
              See my work
            </button>

            <a
              target="_blank"
              className="rounded-md text-base flex items-center justify-center text-blue-600 px-6 py-3 bg-white  border border-gray-200 w-1/2 "
              href="./documents/Alex Glick Resume.pdf"
            >
              View my resume
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center my-8 md:my-4">
          <Image
            src="/me.png"
            width={400}
            height={400}
            alt="Picture of Alex"
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 mb-16 md:mb-32">
        <div className="col-span-1 flex flex-col px-8  my-8 md:my-4">
          <h1 className="text-5xl  text-blue-600">About me</h1>
          <p className="text-sm  my-6 text-gray-500">
            I'm a Pittsburgh, PA based Software Engineer who loves working on
            fun and exciting projects which make peoples lives better. I got my
            start at the University of Pittsburgh where I studied Applied
            Mathematics. Coming out of school, I didn't really know what I
            wanted to do. I had this cool idea for an app, but hadn't really
            done extensive coding before. After about 6 months of trying to find
            a developer, I decided I would just try to make it myself. A few
            weeks later, I had a functional MVP in the app store for people to
            download. Ever since, I have continued to learn new things and
            improve my skills with the goal of making awesome apps which solve
            problems. I love working in a team to find creative solutions to
            complex problems. If you are interested in hearing more about me,
            please feel free to reach out!
          </p>
        </div>
        <div className="col-span-1 flex flex-col px-8   my-8 md:my-4">
          <h1 className="text-5xl text-blue-600 ">Details</h1>
          <div className="mt-6">
            <h6 className="text-xl">Name:</h6>
            <p className="text-sm text-gray-500">Alex Glick</p>
          </div>
          <div className="mt-6">
            <h6 className="text-xl">Age:</h6>
            <p className="text-sm text-gray-500">{howOldIAm} years</p>
          </div>
          <div className="mt-6">
            <h6 className="text-xl">Education:</h6>
            <p className="text-sm text-gray-500">University of Pittsburgh</p>
            <p className="text-sm text-gray-500">
              Applied Mathematics, Economics
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

AboutPage.layout = (page: ReactElement) => <BasicLayout>{page}</BasicLayout>;

export default AboutPage;
