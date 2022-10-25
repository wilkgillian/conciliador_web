import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Contador from "../../../public/images/contador.jpg";
import AnimationHome from "../Animation/AnimationHome";

function Hero() {
  return (
    <Box h="100%" w="100%">
      <HStack>
        <Flex m="auto">
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
            <Image width="900%" height="900%" src={Contador} />
          </Box>
          <VStack ml={10} justifyContent="center" w="50%">
            <Box
              margin="auto"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold" as="h1" fontSize="2.5rem">
                Sistema de reconciliação:
              </Text>
              <Text as="p" fontSize="1.1rem">
                Sistemas desenvolvido para auxiliar na conciliação bancária.
              </Text>
              <AnimationHome />
              <Link passHref href="/Card">
                <Button
                  bg="teal"
                  size="lg"
                  w="68%"
                  h="3rem"
                  mt={4}
                  _hover={{
                    bg: "yellow.100",
                    color: "black",
                  }}
                >
                  Começar
                </Button>
              </Link>
            </Box>
          </VStack>
        </Flex>
      </HStack>
    </Box>
  );
}

export default Hero;
