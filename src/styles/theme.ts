import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      background: "#043873",
      secondary: "#4F9CF9",
      terciary: "#A7CEFC",
    },
    yellow: {
      primary: "#FFE492",
    },
    gray: {
      primary: "#212529",
    },
    white: "#FFFFFF",
  },
  styles: {
    global: {
      body: {
        bg: "blue.background",
        color: "white",
      },
    },
  },
});
