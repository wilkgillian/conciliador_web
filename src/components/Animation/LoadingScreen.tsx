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

export default LoadingScreen;
