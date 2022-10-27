import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData from "./json/loading_files.json";

export default function LoadingScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="300px auto"
      alignSelf="center"
    >
      <Lottie options={defaultOptions} width="30%" height="20%" speed={3} />
    </Box>
  );
}
