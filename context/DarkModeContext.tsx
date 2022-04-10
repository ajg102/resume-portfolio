import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const PREFIX = "mywebapp-resume-portfolio";

type ColorScheme = "light" | "dark";

type DarkModeProviderProps = {
  children: ReactNode;
};

interface DarkModeContext {
  theme: ColorScheme;
  isDarkMode: boolean;
  toggleTheme(): void;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(PREFIX + "color-theme");
    if (storedPrefs === "light" || storedPrefs === "dark") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const DarkModeContext = createContext<DarkModeContext | null>(null);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("Components must be rendered with DarkModeProvider");
  }
  return context;
};

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [theme, setTheme] = useState<ColorScheme>(getInitialTheme);

  const rawSetTheme = (rawTheme: ColorScheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem(PREFIX + "color-theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [setTheme]);

  const value = useMemo(
    () => ({
      theme,
      isDarkMode: theme === "dark",
      toggleTheme,
    }),
    [theme, setTheme]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
