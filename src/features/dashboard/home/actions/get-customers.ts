"use server";

import { api } from "@/shared/lib/axios";

import { getCustomersMapper } from "../mappers/get-customers-mapper";

export type CustomersHttpResponse = {
  data: {
    clientes: {
      info: {
        nomeCompleto: string;
        detalhes: {
          email: string;
          nascimento: string;
        };
      };
      estatisticas: {
        vendas: {
          data: string;
          valor: number;
        }[];
      };
      duplicado?: {
        nomeCompleto: string;
      };
    }[];
  };
  meta: {
    registroTotal: number;
    pagina: number;
  };
  redundante: {
    status: string;
  };
};

export async function getCustomersAction() {
  const { data } = await api.get<CustomersHttpResponse>("/api/customers");
  return getCustomersMapper(data);
}
