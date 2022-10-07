import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../components/Animation/background.json";
import { api } from "../services/api";

function Animation() {
  const [dados, setDados] = useState([
  //   {
  //   id: 0,
  //   text: "",
  //   completed: false,
  // }
]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    const getDados = async () => {
      const response = await api.get(
        "/notes/"
      );
      const data = response.data
      setDados(response.data);
      console.log(data);
    };
    getDados();
  }, []);
  return (
    <>
      <Box w="100vw" h="100vh" position="absolute">
        <Lottie options={defaultOptions} />
      </Box>
      <Box></Box>
    </>
  );
}

export default Animation;
