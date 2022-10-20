import {
  Box,
  Table,
  Text,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DiferencasProps } from "../../types";
import { formatCoin } from "../../utils/formatCoin";
import { formatDate } from "../../utils/formatDate";
import Accordion from "../Accordion";
import LoadingScreen from "../Animation/LoadingScreen";

export default function TableConcilied() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState<DiferencasProps[]>([]);

  useEffect(() => {
    const getDados = async () => {
      const response = await api.get("file/conciliado");
      const { data } = response;
      console.log(data)
      setDados(data);
      setLoading(false);

    };
    getDados();
  }, []);

  const data = dados.map((d) => {
    let id = Math.floor(Date.now() * Math.random()).toString(36);
    const dados_razao = d.dif_razao_contabil.map((r) => {
      return {
        id: r.id,
        data_recebimento: formatDate(r.data_recebimento),
        valor_cielo: formatCoin(r.valor_cielo),
        valor_mxm: formatCoin(r.valor_mxm),
        diferenca: formatCoin(r.valor_mxm),
      };
    });
    const dados_vendas = d.dif_vendas_cielo_sig.map((r) => {
      return {
        id: r.id,
        aut_pagamento: r.aut_pagamento,
        valor_cielo: formatCoin(r.valor_cielo),
        valor_sig: formatCoin(r.valor_sig),
        diferenca: formatCoin(r.diferenca),
      };
    });
    const dados_recebimentos = d.dif_recebimentos_cielo_sig.map((r) => {
      return {
        id: r.id,
        aut_pagamento: r.aut_pagamento,
        valor_cielo: formatCoin(r.valor_cielo),
        valor_sig: formatCoin(r.valor_sig),
        diferenca: formatCoin(r.diferenca),
      };
    });
    return { id, dados_vendas, dados_razao, dados_recebimentos };
  });

  return (
    <Box
      w="100%"
      h="100%"
      overflow="auto"
      bg="#1f338b"
      padding={5}
      borderRadius={10}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        fontSize={20}
        mt={5}
        mb={7}
        color="yellow.300"
      >
        Diferenças dos relatórios
      </Text>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Accordion title="Diferenças Razão">
            <TableContainer>
              {data.map((dat) => (
                <Table key={dat.id} variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th w="40%" textAlign="left">
                        Data do recebimento
                      </Th>
                      <Th>Valor Cielo</Th>
                      <Th>Valor MXM</Th>
                      <Th w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
                        Diferença
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dat.dados_razao.map((d) => (
                      <Tr key={d.id}>
                        <Td>{d.data_recebimento}</Td>
                        <Td>{d.valor_cielo}</Td>
                        <Td>{d.valor_mxm}</Td>
                        <Td w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
                          {d.diferenca}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ))}
            </TableContainer>
          </Accordion>
          <Accordion title="Diferenças Vendas Cielo X Sig">
            <TableContainer>
              {data.map((dat) => (
                <Table key={dat.id} variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th>Autorização de pagamento</Th>
                      <Th>Valor Cielo</Th>
                      <Th>Valor Sig</Th>
                      <Th w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
                        Diferença
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dat.dados_vendas.map((d) => (
                      <Tr>
                        <Td>{d.aut_pagamento}</Td>
                        <Td>{d.valor_cielo}</Td>
                        <Td>{d.valor_sig}</Td>
                        <Td w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
                          {d.diferenca}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ))}
            </TableContainer>
          </Accordion>
          <Accordion title="Diferenças Recebimentos Cielo x Sig">
            <TableContainer>
              {data.map((dat) => (
                <Table key={dat.id} variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th>Autorização de pagamento</Th>
                      <Th>Valor Cielo</Th>
                      <Th>Valor Sig</Th>
                      <Th w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
                        Diferença
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dat.dados_recebimentos.map((d) => (
                      <Tr>
                        <Td>{d.aut_pagamento}</Td>
                        <Td>{d.valor_cielo}</Td>
                        <Td>{d.valor_sig}</Td>
                        <Td w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
                          {d.diferenca}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ))}
            </TableContainer>
          </Accordion>
        </>
      )}
    </Box>
  );
}
