import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from "../components/Animation/background.json";

function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box w="100%" h="100%">
      <Lottie options={defaultOptions} />
    </Box>
  );
}

export default Animation;
