import { Tbody, Td, Tr } from "@chakra-ui/react";

interface DataProps {
  isCieloXSig: boolean;
  data: TableBodyProps[];
}
export interface TableBodyProps {
  id: string;
  data_recebimento?: string;
  valor_cielo?: string;
  valor_mxm?: string;
  diferenca: string;
  aut_pagamento?: string;
  valor_sig?: string;
  data_venda?: string;
}

export default function TableBody({ data, isCieloXSig = true }: DataProps) {
  return (
    <Tbody>
      {data.map((d) => (
        <Tr key={d.id}>
          {isCieloXSig ? (
            <Td>{d.aut_pagamento}</Td>
          ) : (
            <Td>{d.data_recebimento || d.data_venda}</Td>
          )}
          <Td>{d.valor_cielo || d.valor_sig}</Td>
          <Td>{d.valor_mxm || d.valor_sig}</Td>
          <Td w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
            {d.diferenca}
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}
