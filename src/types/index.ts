import { InputProps } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import { ReactElement, ReactNode } from "react";

export interface DiferencasProps {
  id: number;
  dif_recebimentos_cielo_sig: {
    id: string;
    aut_pagamento: string;
    valor_cielo: number;
    valor_sig: number;
    diferenca: number;
  }[];
  dif_vendas_cielo_sig: {
    id: string;
    aut_pagamento: string;
    valor_cielo: number;
    valor_sig: number;
    diferenca: number;
  }[];
  dif_recebimentos_sig_mxm: {
    id: string;
    data_recebimento: string;
    valor_sig: number;
    valor_mxm: number;
    diferenca: number;
  }[];
  dif_vendas_sig_mxm: {
    id: string;
    data_venda: string;
    valor_sig: number;
    valor_mxm: number;
    diferenca: number;
  }[];
}
export interface DataProps {
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

export interface TableContainerProps {
  id: string;
  data?: string;
  aut?: string;
  valor_a: string;
  valor_b: string;
  children: ReactNode;
}
export interface AccordionProps {
  children: ReactNode;
  title: string;
}
export interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}
export interface InputFileProps extends InputProps {
  name: string;
  label?: string;
  error?: string;
}
