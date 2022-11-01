import { Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import BackButton from "../components/Buttons/BackButton";
import DownloadButton from "../components/Buttons/DownloadButton";
import TableConcilied from "../components/Concilied/TableConcilied";

export default function Conciliacao() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box margin="auto" w={isWideVersion? "70%" : "90%"} h="700px" overflow="hidden">
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
        <Box w={isWideVersion?"70%" :"90%"}>
          <SimpleGrid columns={2} gap={5} display="flex" alignItems="center"><DownloadButton />
          <BackButton /></SimpleGrid>
       
        </Box>
      </Box>
    </>
  );
}
