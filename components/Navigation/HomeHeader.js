import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "../Avatar";
function HomeHeader() {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="navLink">About</p>
        <p className="navLink">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="navLink">Gmail</p>
        <p className="navLink">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer" />
        <Avatar src={"./profile.jpg"} />
      </div>
    </header>
  );
}

export default HomeHeader;
