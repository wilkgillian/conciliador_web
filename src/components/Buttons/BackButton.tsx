import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      bg="red.500"
      size="lg"
      w="100%"
      h="3rem"
      _hover={{
        bg: "red",
        color: "black",
      }}
      mt={2}
      onClick={() => router.back()}
    >
      Voltar
    </Button>
  );
}
