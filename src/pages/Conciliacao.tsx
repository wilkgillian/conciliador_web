import { Box } from "@chakra-ui/react";
import BackButton from "../components/Buttons/BackButton";
import DownloadButton from "../components/Buttons/DownloadButton";
import TableConcilied from "../components/Concilied/TableConcilied";

export default function Conciliacao() {
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
        <Box w="20%">
          <DownloadButton />
          <BackButton />
        </Box>
      </Box>
    </>
  );
}
