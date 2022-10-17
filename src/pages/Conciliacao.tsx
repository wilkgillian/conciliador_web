import { Box, Button, Text } from "@chakra-ui/react";
import Animation from "../components/Concilied/Animation";

function Conciliacao() {
  return (
    <>
      <Box margin="auto" mt="5rem" w="80%" h="700px" overflow="hidden">
        <Animation />
      </Box>
      <Box
        w="100%"
        display="flex"
        mt="4rem"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          bg="teal"
          size="lg"
          w="20%"
          h="3rem"
          _hover={{
            bg: "yellow.100",
            color: "black",
          }}
        >
          Download
        </Button>
      </Box>
    </>
  );
}

export default Conciliacao;
