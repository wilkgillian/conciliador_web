import { Box, Flex, Spinner } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData from "./loading_files.json";

function LoadingScreen() {
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
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="300px auto"
      alignSelf="center"
    >
      <Lottie options={defaultOptions} width="20%" height="10%" speed={3} />
    </Box>
  );
}

export default LoadingScreen;
