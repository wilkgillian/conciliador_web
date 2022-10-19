import { Box, Button } from "@chakra-ui/react";
import TableConcilied from "../components/Concilied/TableConcilied";

function Conciliacao() {
  return (
    <>
      <Box margin="auto" w="80%" h="700px" overflow="hidden">
        <TableConcilied />
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
