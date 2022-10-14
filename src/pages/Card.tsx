import { Box, Button, Divider, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { FormEvent, ReactElement, useState } from "react";
import AnimationUpload from "../components/Animation/AnimationUpload";
import { Input } from "../components/InputFile";

export default function Card() {
  const [fileCielo, setFileCielo] = useState(null);
  const [fileSig, setFileSig] = useState(null);
  const [fileMxm, setFileMxm] = useState(null);
  async function handleUploadFiles(event: FormEvent) {
    event.preventDefault();
    const data = {
      name: fileCielo,
      file_url: "",
      id: 0,
      upload_at: new Date(),
    };
    console.log(data);
    await axios.post("http://localhost:8000/file/upload", data);
  }
  // function uploadImage(e: FormEvent) {
  //   e.preventDefault();
  //   console.log(fileCielo, fileSig, fileMxm);
  // }
  return (
    <Box
      w="100%"
      h="100%"
      bg="blue.background"
      mt="3rem"
      padding="3rem 13rem
    "
    >
      <Text as="h1" textAlign="center" fontSize={25} fontWeight="bold">
        Faça o upload dos arquivos para conciliação
        <br /> dos cartões:
      </Text>
      <AnimationUpload />
      <VStack
        as="form"
        h="100%"
        w="30%"
        margin="auto"
        method="post"
        onSubmit={handleUploadFiles}
      >
        <Input
          type="file"
          onChange={(e) => setFileCielo(e.target.files[0])}
          name="cielo"
          id="cielo"
          accept=".xlsx, .csv"
        />
        <Input
          type="file"
          onChange={(e) => setFileSig(e.target.files[0])}
          name="sig"
          id="sig"
          accept=".xlsx, .csv"
        />
        <Input
          type="file"
          onChange={(e) => setFileMxm(e.target.files[0])}
          name="mxm"
          id="mxm"
          accept=".xlsx, .csv"
          mb={10}
        />

        <Button
          bg="teal"
          size="lg"
          w="100%"
          h="3rem"
          type="submit"
          _hover={{
            bg: "yellow.100",
            color: "black",
          }}
          onClick={handleUploadFiles}
        >
          Conciliar
        </Button>

        <Link passHref href="/Conciliacao">
          <Button
            bg="teal"
            size="lg"
            w="100%"
            h="3rem"
            type="button"
            _hover={{
              bg: "yellow.100",
              color: "black",
            }}
          >
            Baixar arquivo
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
