import { Dispatch, SetStateAction } from "react";

export function ThemeToggle({
  theme,
  setTheme,
  }: {
    theme: string | null;
    setTheme: Dispatch<SetStateAction<string | null>>;
  }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center rounded-[20px] cursor-pointer"
    >
      {theme === "dark" ? <img src="/assets/theme/sun.svg" height={25} width={25} alt="ImgLocal" /> : <img src="/assets/theme/moon.svg" height={25} width={25} alt="ImgLocal" />}
    </button>
  );
}