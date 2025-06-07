import { Customer } from "@/shared/types/customer";
import { CustomersHttpResponse } from "./get-customers";

type DomainCustomersResponse = {
  customers: Customer[];
};

export function getCustomersMapper(
  http: CustomersHttpResponse
): DomainCustomersResponse {
  return {
    customers: http.data.clientes.map((client) => ({
      id: crypto.randomUUID(),
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
