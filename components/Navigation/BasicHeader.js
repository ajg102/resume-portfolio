import Image from "next/image";
import { useRouter } from "next/router";
import { GitHubIcon, InstagramIcon } from "../CustomIcons";
import { DocumentTextIcon } from "@heroicons/react/outline";

function BasicHeader() {
  const router = useRouter();

  const goHomeHandler = () => {
    router.push("/");
  };

  return (
    <header className="bg-white sticky top-0 border-b border-gray-100 shadow-sm z-10">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={goHomeHandler}
          src={"/glick-google.png"}
          width={75}
          height={30}
          className="cursor-pointer"
          alt="Glick logo"
        />
        <div className="flex ml-auto items-center space-x-4">
          <a target="_blank" href="https://github.com/ajg102">
            <GitHubIcon
              className="w-10 h-10 hover:bg-gray-200 rounded-lg cursor-pointer p-2"
              fillColor="#bbb"
            />
          </a>

          <a target="_blank" href="https://instagram.com/alex_glick32">
            <InstagramIcon
              className="w-10 h-10 cursor-pointer p-2 hover:bg-gray-200 rounded-lg "
              fillColor="#bbb"
            />
          </a>

          <a target="_blank" href={"./documents/Alex Glick Resume.pdf"}>
            <DocumentTextIcon className="text-[#bbb] w-10 h-10 hover:bg-gray-200 rounded-lg cursor-pointer p-2" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default BasicHeader;
