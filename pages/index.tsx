import { SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, SyntheticEvent, useState } from "react";
import MicrophoneIcon from "../components/CustomIcons/Microphone";
import HomeLayout from "../components/Layout/HomeLayout";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("Learn about Alex");
  const [inputHasFocused, setInputHasFocused] = useState(false);

  const googleSearchHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (search.trim() === "") return;
    router.push(`/search?q=${search}&f=all`);
  };

  const onFocusHandler = () => {
    if (inputHasFocused) return;
    setSearch("");
    setInputHasFocused(true);
  };

  const feelingLuckyHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col items-center my-auto flex-grow w-4/5">
      <Image
        src="/glick-google.png"
        height={100}
        width={275}
        alt="Glick logo"
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          onFocus={onFocusHandler}
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

Home.layout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;
