import { Box, Button, Text } from "@chakra-ui/react";

function Conciliacao() {
  return (
    <Box margin="auto" mt="5rem" w="80%" h="700px">
      <Box
        bg="white"
        margin="auto"
        w="70%"
        h="70%"
        borderRadius={20}
        display="flex"
        color="black"
        alignItems="center"
        justifyContent="center"
        boxShadow="dark-lg"
      >
        <Text textAlign="center" fontSize={50} fontWeight="bold">
          File
        </Text>
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
    </Box>
  );
}

export default Conciliacao;
