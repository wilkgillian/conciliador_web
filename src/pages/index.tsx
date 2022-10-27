import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Box id="root" w="100%" maxW="1500px" margin="auto" h="100%" bg="#043873">
      <Hero />
    </Box>
  );
};

export default Home;
