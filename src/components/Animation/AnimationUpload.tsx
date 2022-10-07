import { Box, Flex } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData from "./upload.json";

function AnimationUpload() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box w="100%" mt="1rem">
      <Flex>
        <Lottie options={defaultOptions} width="20%" speed={1} />
      </Flex>
    </Box>
  );
}

export default AnimationUpload;
