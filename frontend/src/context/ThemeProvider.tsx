import React, { useState } from "react";
import { type Theme, ThemeContext } from "./ThemeContext.tsx";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themes: Record<string, Theme> = {
    default: {
      main: "#ffffff",
      root: "#F0F0F0",
      focusButton: "#E8E8E8",
      focusButtonOutline: "#BCBCBC",
      focusText: "#6E6E6E",
      unfocusButton: "#E8E8E8",
      unfocusText: "#E8E8E8",
    },
  };

  const [theme, setThemeState] = useState<Theme>(themes["default"]);

  const setTheme = (themeId: string) => {
    setThemeState(themes[themeId] ?? themes["default"]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
