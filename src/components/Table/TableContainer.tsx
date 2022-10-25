import {
  Table,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface TableContainerProps {
  id: string;
  data?: string;
  aut?: string;
  valor_a: string;
  valor_b: string;
  children: ReactNode;
}

export default function TableContainer({
  id,
  data,
  aut,
  valor_a,
  valor_b,
  children,
}: TableContainerProps) {
  return (
    <Table key={id} variant="unstyled">
      <Thead>
        <Tr>
          <Th w="40%" textAlign="left">
            {data || aut}
          </Th>
          <Th>{valor_a}</Th>
          <Th>{valor_b}</Th>
          <Th w="20%" bg="rgba(10,23,55,0.3)" textAlign="center">
            Diferença
          </Th>
        </Tr>
      </Thead>
      {children}
    </Table>
  );
}
