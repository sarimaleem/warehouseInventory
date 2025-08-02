import { createContext } from "react";

export type Theme = {
  root: string;
  main: string;
  focusButton: string;
  focusButtonOutline: string;
  focusText: string;
  unfocusButton: string;
  unfocusText: string;
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeId: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
