"use client";

import * as React from "react";
import Cookie from "js-cookie";

const DEFAULT_THEME = "light";
const THEME_COOKIE_NAME = "theme-preference";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (newTheme?: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);

  // Sync with the actual theme applied by the script
  React.useEffect(() => {
    const appliedTheme = document.documentElement.getAttribute("data-theme");
    if (appliedTheme === "light" || appliedTheme === "dark") {
      setTheme(appliedTheme);
    }
  }, []);

  const toggleTheme = React.useCallback((newTheme?: Theme) => {
    setTheme((current) => {
      const next = newTheme ?? (current === "light" ? "dark" : "light");

      document.documentElement.setAttribute("data-theme", next);

      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      Cookie.set(THEME_COOKIE_NAME, next, { expires: 1000 });

      return next;
    });
  }, []);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export { DEFAULT_THEME, THEME_COOKIE_NAME };
