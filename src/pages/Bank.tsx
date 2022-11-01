import {
  Box,
  Button,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import AnimationUpload from "../components/Animation/AnimationUpload";
import BackButton from "../components/Buttons/BackButton";
import { Input } from "../components/Input/InputFile";

export default function Card() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      w="100%"
      h="100%"
      bg="blue.background"
      mt="3rem"
      padding={isWideVersion ? "3rem 13rem " : "0 1rem"}
    >
      <Text as="h1" textAlign="center" fontSize={isWideVersion? 20 : 17} fontWeight="bold">
        Faça o upload dos arquivos para conciliação <br />
        bancária:
      </Text>
      <AnimationUpload />
      <VStack as="form" h="100%" w={isWideVersion? 500 : "100%" } margin="auto">
        <Input name="banco A" id="banco A" />
        <Input name="sig" id="sig" />
        <Input name="mxm" id="mxm" mb={10} />
        <Link passHref href="/Conciliacao">
          <Button
            bg="teal"
            size="lg"
            w="100%"
            h="3rem"
            type="submit"
            _hover={{
              bg: "yellow.100",
              color: "black",
            }}
            disabled={true}
          >
            Conciliar
          </Button>
        </Link>
        <Text textAlign="center">⚠️ Sorry, this feature has not yet been implemented. ⚠️</Text>
        <BackButton />
      </VStack>
    </Box>
  );
}
