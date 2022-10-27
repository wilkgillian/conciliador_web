import {
  Box,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Contador from "../../../public/images/contador.jpg";
import AnimationHome from "../Animation/AnimationHome";
import StartButton from "../Buttons/StartButton";

export default function Hero() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box h="100%" w="100%" maxW={1480} px={["30", "15", "5"]}>
      <HStack>
        <Flex m="auto" alignItems="center" justifyContent="center">
          {isWideVersion ? (
            <Box
              mt={20}
              overflow="hidden"
              w="50%"
              h="100%"
              border="1px solid white"
              borderRadius={20}
              boxShadow="dark-lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image width="900%" height="900%" src={Contador} alt="contador.png" />
            </Box>
          ) : (
            ""
          )}

          <VStack m={isWideVersion ? 'auto' : 10} justifyContent="center" w={isWideVersion? "50%": "100%"}>
            <Box
              margin="auto"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold" as="h1" fontSize={["4xl"]} textAlign="center">
                Sistema de conciliação:
              </Text>
              <Text as="p" fontSize={["lg"]} textAlign="center">
                Sistema desenvolvido para auxiliar na conciliação bancária.
              </Text>
              <AnimationHome />
              <Box
                w={isWideVersion ? "68%": "100%"}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StartButton />
              </Box>
            </Box>
          </VStack>
        </Flex>
      </HStack>
    </Box>
  );
}
