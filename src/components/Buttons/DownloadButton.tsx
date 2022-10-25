import { Button } from "@chakra-ui/react";

export default function DownloadButton() {
  return (
    <Button
      bg="teal"
      size="lg"
      w="100%"
      h="3rem"
      _hover={{
        bg: "yellow.100",
        color: "black",
      }}
      disabled
    >
      Download
    </Button>
  );
}
