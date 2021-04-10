import { useState } from "react";
import HomeLayout from "../components/Layout/HomeLayout";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import MicrophoneIcon from "../components/CustomIcons/Microphone";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("Learn about Alex");

  const googleSearchHandler = (e) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  const feelingLuckyHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col items-center my-auto flex-grow w-4/5">
      <Image src="/glick-google.png" height={100} width={275} />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={googleSearchHandler} className="googleButton">
          Google Search
        </button>
        <button onClick={feelingLuckyHandler} className="googleButton">
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
}

Home.layout = HomeLayout;
