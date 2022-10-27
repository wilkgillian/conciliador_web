import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function StartButton() {
  return (
    <Link passHref href="/Card">
      <Button
      w="100%"
      h="3rem"
        bg="teal"
        _hover={{
          bg: "yellow.100",
          color: "black",
        }}
      >
        Começar
      </Button>
    </Link>
  );
}
