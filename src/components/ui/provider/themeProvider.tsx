import { createContext, useContext, useState, ReactNode } from "react";

interface IThemeProviderContextType {
  mode: boolean;
  setLightMode: (value: boolean) => void;
}

const ThemeContext = createContext<IThemeProviderContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setLightMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ mode, setLightMode }}>
      <div className={mode ? "light-theme" : "dark-theme"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
};
