import { CustomersHttpResponse } from "./get-customers";

type DomainCustomersResponse = {
  customers: {
    name: string;
    email: string;
    birthday: string;
    statistics: {
      sales: {
        date: Date;
        value: number;
      }[];
    };
  }[];
};

export function getCustomersMapper(
  http: CustomersHttpResponse
): DomainCustomersResponse {
  return {
    customers: http.data.clientes.map((client) => ({
      name: client.info.nomeCompleto,
      email: client.info.detalhes.email,
      birthday: client.info.detalhes.nascimento,
      statistics: {
        sales: client.estatisticas.vendas.map((s) => ({
          date: new Date(s.data),
          value: s.valor,
        })),
      },
    })),
  };
}
