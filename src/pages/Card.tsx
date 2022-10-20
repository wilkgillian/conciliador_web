import { Box, Button, Spinner, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import AnimationUpload from "../components/Animation/AnimationUpload";
import { Input } from "../components/InputFile";
import { api } from "../services/api";

export default function Card() {
  const [fileVendasCielo, setFileVendasCielo] = useState<Blob | string | File>(
    ""
  );
  const [fileRecebimentosCielo, setFileRecebimentosCielo] = useState<
    Blob | string | File
  >("");
  const [fileVendasSig, setFileVendasSig] = useState<Blob | string | File>("");
  const [fileRecebimentosSig, setFileRecebimentosSig] = useState<
    Blob | string | File
  >("");
  const [fileMxm, setFileMxm] = useState<Blob | string | File>("");
  const [isLoading, setIstLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  async function handleUploadFiles() {
    setIstLoading(true);
    setDisabled(true);

    const formData = new FormData();

    formData.append("arquivo", fileVendasCielo);
    await new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      api.post("file/upload", formData)
    );
    formData.append("arquivo", fileVendasSig);
    await new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      api.post("file/upload", formData)
    );
    formData.append("arquivo", fileRecebimentosCielo);
    await new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      api.post("file/upload", formData)
    );
    formData.append("arquivo", fileRecebimentosSig);
    await new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      api.post("file/upload", formData)
    );
    formData.append("arquivo", fileMxm);
    await new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      api.post("file/upload", formData)
    );
    router.push("/Conciliacao");
  }

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
              setFileVendasCielo(e.target.files[0]);
            }
          }}
          name="vendas cielo"
          id="vendas cielo"
          accept=".xlsx"
          isRequired={true}
        />
        <Input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
              setFileVendasSig(e.target.files[0]);
            }
          }}
          name="vendas sig"
          id="vendas sig"
          accept=".xlsx"
          isRequired={true}
        />
        <Input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
              setFileRecebimentosCielo(e.target.files[0]);
            }
          }}
          name="recebimentos cielo"
          id="recebimentos cielo"
          accept=".xlsx"
          isRequired={true}
        />
        <Input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
              setFileRecebimentosSig(e.target.files[0]);
            }
          }}
          name="recebimentos sig"
          id="recebimentos sig"
          accept=".xlsx"
          isRequired={true}
        />
        <Input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
              setFileMxm(e.target.files[0]), setDisabled(false);
            }
          }}
          name="mxm"
          id="mxm"
          accept=".xlsx"
          mb={10}
          isRequired={true}
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
          disabled={disabled ? true : false}
          onClick={handleUploadFiles}
        >
          {isLoading ? <Spinner /> : "Conciliar"}
        </Button>
      </VStack>
    </Box>
  );
}
