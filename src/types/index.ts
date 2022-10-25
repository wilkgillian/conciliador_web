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
