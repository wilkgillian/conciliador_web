import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import TableConcilied from "../components/Concilied/TableConcilied";

function Conciliacao() {
  const router = useRouter();
  return (
    <>
      <Box margin="auto" w="80%" h="700px" overflow="hidden">
        <TableConcilied />
      </Box>
      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        mt="1rem"
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
          disabled
        >
          Download
        </Button>
        <Button
          bg="red.500"
          size="lg"
          w="20%"
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
      </Box>
    </>
  );
}

export default Conciliacao;
