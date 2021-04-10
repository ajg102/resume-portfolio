import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import MicrophoneIcon from "../CustomIcons/Microphone";
import Avatar from "../Avatar";
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const goHomeHandler = () => {
    router.push("/");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    router.push(`/search?q=${search}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={goHomeHandler}
          src={"/glick-google.png"}
          width={75}
          height={30}
          className="cursor-pointer"
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            onClick={() => setSearch("")}
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 h-7 hidden sm:inline-flex border-l-2 pl-4 border-gray-300 cursor-pointer" />
          <SearchIcon className="h-7 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={searchHandler}>
            Search
          </button>
        </form>
        <Avatar src="./profile.jpg" className="ml-auto " />
      </div>

      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
