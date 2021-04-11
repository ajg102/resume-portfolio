import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <div className="w-full flex text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-40 border-b ">
      <div className="flex space-x-6">
        <HeaderOption
          Icon={SearchIcon}
          title="All"
          selected={router.query.f === "all"}
        />
        <HeaderOption
          Icon={PhotographIcon}
          title="Images"
          selected={router.query.f === "images"}
        />
        <HeaderOption
          Icon={PlayIcon}
          title="Videos"
          selected={router.query.f === "videos"}
        />
        <HeaderOption
          Icon={NewspaperIcon}
          title="News"
          selected={router.query.f === "news"}
        />
        <HeaderOption
          Icon={BookIcon}
          title="Books"
          selected={router.query.f === "books"}
        />
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
