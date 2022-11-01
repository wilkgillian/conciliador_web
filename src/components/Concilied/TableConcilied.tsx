import {
  Box,
  Text,
  TableContainer as TableContainerChakra,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DiferencasProps } from "../../types";
import { formatCoin } from "../../utils/formatCoin";
import { formatDate } from "../../utils/formatDate";
import Accordion from "../Accordion";
import LoadingScreen from "../Animation/LoadingScreen";
import TableBody from "../Table/TableBody";
import TableContainer from "../Table/TableContainer";

export default function TableConcilied() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState<DiferencasProps[]>([]);

  useEffect(() => {
    const getDados = async () => {
      const response = await api.get("file/conciliado");
      const { data } = response;
      setDados(data);
      setLoading(false);
    };
    getDados();
  }, []);

  const data = dados.map((d) => {
    let id = Math.floor(Date.now() * Math.random()).toString(36);
    const dados_recebimentos_sig_mxm = d.dif_recebimentos_sig_mxm.map((r) => {
      return {
        id: r.id,
        data_recebimento: formatDate(r.data_recebimento),
        valor_cielo: formatCoin(r.valor_sig),
        valor_mxm: formatCoin(r.valor_mxm),
        diferenca: formatCoin(r.diferenca),
      };
    });
    const dados_vendas_sig_mxm = d.dif_vendas_sig_mxm.map((r) => {
      return {
        id: r.id,
        data_recebimento: formatDate(r.data_venda),
        valor_cielo: formatCoin(r.valor_sig),
        valor_mxm: formatCoin(r.valor_mxm),
        diferenca: formatCoin(r.diferenca),
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
    return {
      id,
      dados_vendas,
      dados_recebimentos_sig_mxm,
      dados_recebimentos,
      dados_vendas_sig_mxm,
    };
  });

  return (
    <Box
      w="100%"
      h="100%"
      overflow="auto"
      bg="rgba(0, 128, 255, 0.2)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(5px)"
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
          <Accordion title="Diferenças recebimentos SIG x MXM">
            <TableContainerChakra>
              {data.map((dat) => (
                <TableContainer
                  id={dat.id}
                  key={dat.id}
                  data="Data do recebimento"
                  valor_a="Valor Sig"
                  valor_b="Valor MXM"
                >
                  <TableBody
                    data={dat.dados_recebimentos_sig_mxm}
                    isCieloXSig={false}
                  />
                </TableContainer>
              ))}
            </TableContainerChakra>
          </Accordion>
          <Accordion title="Diferenças vendas SIG x MXM">
            <TableContainerChakra>
              {data.map((dat) => (
                <TableContainer
                  id={dat.id}
                  key={dat.id}
                  data="Data do recebimento"
                  valor_a="Valor Sig"
                  valor_b="Valor MXM"
                >
                  <TableBody
                    data={dat.dados_vendas_sig_mxm}
                    isCieloXSig={false}
                  />
                </TableContainer>
              ))}
            </TableContainerChakra>
          </Accordion>
          <Accordion title="Diferenças Vendas Cielo X Sig">
            <TableContainerChakra>
              {data.map((dat) => (
                <TableContainer
                  id={dat.id}
                  key={dat.id}
                  aut="Autorização de pagamento"
                  valor_a="Valor Cielo"
                  valor_b="Valor Sig"
                >
                  <TableBody data={dat.dados_vendas} isCieloXSig={true} />
                </TableContainer>
              ))}
            </TableContainerChakra>
          </Accordion>
          <Accordion title="Diferenças Recebimentos Cielo x Sig">
            <TableContainerChakra>
              {data.map((dat) => (
                <TableContainer
                  id={dat.id}
                  key={dat.id}
                  aut="Autorização de pagamento"
                  valor_a="Valor Cielo"
                  valor_b="Valor Sig"
                >
                  <TableBody data={dat.dados_recebimentos} isCieloXSig={true} />
                </TableContainer>
              ))}
            </TableContainerChakra>
          </Accordion>
        </>
      )}
    </Box>
  );
}
