import { Box, Flex } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData from "./json/animation.json";

export default function AnimationHome() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box w="70%" mt="2rem">
      <Flex>
        <Lottie options={defaultOptions} width="50%" speed={1} />
      </Flex>
    </Box>
  );
}
