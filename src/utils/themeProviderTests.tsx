import { ThemeProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeWrapper = ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
