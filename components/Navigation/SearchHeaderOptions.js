import React from "react";
import HeaderOption from "./HeaderOption";
import {
  SearchIcon,
  PhotographIcon,
  NewspaperIcon,
  BookIcon,
  PlayIcon
} from "../CustomIcons";
import { DotsVerticalIcon } from "@heroicons/react/outline";

function SearchHeaderOptions() {
  return (
    <div className="w-full flex text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-40 border-b ">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={BookIcon} title="Books" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="navLink">Settings</p>
        <p className="navLink">Tools</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
