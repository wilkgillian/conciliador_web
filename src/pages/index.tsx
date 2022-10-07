import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import { initializeApp } from "firebase/app";

const Home: NextPage = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDg256dtgifDpk1NKxU7_Hg27OXfZsDpHM",
    authDomain: "web-reconciliador.firebaseapp.com",
    projectId: "web-reconciliador",
    storageBucket: "web-reconciliador.appspot.com",
    messagingSenderId: "777030222505",
    appId: "1:777030222505:web:73f1ec284a233dccd69fb8",
    measurementId: "G-R0GQK64QWM",
  };
  const app = initializeApp(firebaseConfig);
  return (
    <Box id="root" w="100%" maxW="1500px" margin="auto" h="100%" bg="#043873">
      <Hero />
    </Box>
  );
};

export default Home;
