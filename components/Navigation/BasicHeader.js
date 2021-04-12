import Image from "next/image";
import { useRouter } from "next/router";

function BasicHeader() {
  const router = useRouter();

  const goHomeHandler = () => {
    router.push("/");
  };

  return (
    <header className="bg-white sticky top-0">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={goHomeHandler}
          src={"/glick-google.png"}
          width={75}
          height={30}
          className="cursor-pointer"
        />
        <div className="flex ml-auto">
          <a target="_blank" href={"./documents/Alex Glick Resume.pdf"}>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default BasicHeader;
