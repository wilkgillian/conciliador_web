import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../components/Animation/background.json";
import { api } from "../services/api";

function Animation() {
  const [dados, setDados] = useState([
    {
      id: 0,
      name: "",
      file_url: "",
      upload_at: "",
    },
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
      const response = await axios.get("http://localhost:8000/files");
      const data = response.data;
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
      <Box position="absolute">
        {dados.map((dat) => (
          <ul key={dat.id}>
            <li>
              <Text>{dat.name}</Text>
              <strong>{dat.upload_at}</strong>
              <strong>{dat.file_url}</strong>
              <Button bg="teal" color="white" as="a" href={dat.file_url} download>
                Download
              </Button>
            </li>
          </ul>
        ))}
      </Box>
    </>
  );
}

export default Animation;
