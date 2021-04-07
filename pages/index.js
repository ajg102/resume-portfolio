import { useDarkMode } from "../context/DarkModeContext";
import BasicLayout from "../components/layout/BasicLayout";

export default function Home() {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <div className="flex">
      <button
        onClick={toggleTheme}
        className="bg-blue-300 dark:bg-gray-800 text-black dark:text-white"
      >
        {isDarkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

Home.layout = BasicLayout;
