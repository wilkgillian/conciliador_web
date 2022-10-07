import { Box, Button, Divider, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FormEvent } from "react";
import AnimationUpload from "../components/Animation/AnimationUpload";
import { Input } from "../components/InputFile";

export default function Card() {
  function handleCreateUser(event: FormEvent) {
    event.preventDefault();
    alert("Submitado");
  }
  return (
    <Box
      w="100%"
      h="100%"
      bg="blue.background"
      mt="3rem"
      padding="3rem 13rem
    "
    >
      <Text as="h1" textAlign="center" fontSize={25} fontWeight="bold">
        Faça o upload dos arquivos para conciliação <br/>bancária:
      </Text>
      <AnimationUpload />
      <VStack as="form" h="100%" w="30%" margin="auto">
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
        >
          Conciliar
        </Button>
        </Link>
      </VStack>
    </Box>
  );
}
