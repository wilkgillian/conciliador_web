import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData from "./json/upload.json";

export default function AnimationUpload() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
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
        <Lottie options={defaultOptions} width={isWideVersion? 300 : 200} speed={1} />
      </Flex>
    </Box>
  );
}
