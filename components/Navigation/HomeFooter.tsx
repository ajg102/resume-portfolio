import { GlobeIcon } from "@heroicons/react/solid";
function HomeFooter() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United States, Pittsburgh PA</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Carbon neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="navLink">Advertising</p>
          <p className="navLink">Business</p>
          <a
            target="_blank"
            href="https://github.com/ajg102/resume-portfolio"
            className="navLink"
          >
            How this site works
          </a>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p className="navLink">Privacy</p>
          <p className="navLink">Terms</p>
          <p className="navLink">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
