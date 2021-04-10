import HomeLayout from "../components/Layout/HomeLayout";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <form className="flex flex-col items-center mt-40 flex-grow">
      <Image src="/glick-google.png" height={150} width={300} />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" className="flex flex-grow focus:outline-none" />
        <svg
          className="h-5 "
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            fill="#4285f4"
          ></path>
          <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
          <path
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            fill="#f4b400"
          ></path>
          <path
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            fill="#ea4335"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="googleButton">Google Search</button>
        <button className="googleButton">I'm Feeling Lucky</button>
      </div>
    </form>
  );
}

Home.layout = HomeLayout;
