import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingScreen from "../Animation/LoadingScreen";

function Animation() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const getDados = async () => {
      const response = await axios.get("http://localhost:8000/file/conciliado");
      const data = response.data;
      setDados(response.data);
      console.log(data);
      setLoading(false);
    };
    getDados();
  }, []);
  return (
    <>
      <Box
        bg="white"
        margin="auto"
        w="70%"
        h="70%"
        borderRadius={20}
        display="flex"
        color="black"
        alignItems="center"
        justifyContent="center"
        boxShadow="dark-lg"
      >
        {loading ? (
          <LoadingScreen />
        ) : (
          <Box>
            {dados.map((dat) => (
              <ul key={dat.id}>
                <li>
                  Diferença razao:
                  {dat.dif_razao_contabil.map((d) => (
                    <ul key={d.id}>
                      <li>{d.data_recebimento}</li>
                      <li>{d.valor_cielo}</li>
                      <li>{d.valor_mxm}</li>
                      <li>{d.diferenca}</li>
                    </ul>
                  ))}
                </li>
                <li>
                  Diferença vendas:
                  {dat.dif_vendas_cielo_sig.map((d) => (
                    <ul key={d.id}>
                      <li>{d.aut_pagamento}</li>
                      <li>{d.valor_cielo}</li>
                      <li>{d.valor_sig}</li>
                      <li>{d.diferenca}</li>
                    </ul>
                  ))}
                </li>
                <li>
                  Diferença recebimentos:
                  {dat.dif_recebimentos_cielo_sig.map((d) => (
                    <ul key={d.id}>
                      <li>{d.aut_pagamento}</li>
                      <li>{d.valor_cielo}</li>
                      <li>{d.valor_mxm}</li>
                      <li>{d.diferenca}</li>
                    </ul>
                  ))}
                </li>
              </ul>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default Animation;
