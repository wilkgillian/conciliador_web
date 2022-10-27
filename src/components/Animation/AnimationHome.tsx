import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Lottie from "react-lottie";
import * as animationData from "./json/animation.json";

export default function AnimationHome() {
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
    <Box w={isWideVersion? "70%": "100%"} mt="2rem">
      <Flex>
        <Lottie options={defaultOptions} width={isWideVersion? "50%": "100%"} speed={1} />
      </Flex>
    </Box>
  );
}
