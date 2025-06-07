export const originalCustomersMock = {
  data: {
    clientes: [
      {
        info: {
          nomeCompleto: "Ana Beatriz",
          detalhes: {
            email: "ana.b@example.com",
            nascimento: "1992-05-01",
          },
        },
        estatisticas: {
          vendas: [
            {
              data: "2024-01-01",
              valor: 150,
            },
            {
              data: "2024-01-02",
              valor: 50,
            },
          ],
        },
      },
      {
        info: {
          nomeCompleto: "Carlos Eduardo",
          detalhes: {
            email: "cadu@example.com",
            nascimento: "1987-08-15",
          },
        },
        duplicado: {
          nomeCompleto: "Carlos Eduardo",
        },
        estatisticas: {
          vendas: [],
        },
      },
    ],
  },
  meta: {
    registroTotal: 2,
    pagina: 1,
  },
  redundante: {
    status: "ok",
  },
};

export const customersMock = JSON.parse(JSON.stringify(originalCustomersMock));

export function generateRandomSales(): { data: string; valor: number }[] {
  const salesCount = Math.floor(Math.random() * 5) + 1;
  const sales: { data: string; valor: number }[] = [];

  for (let i = 0; i < salesCount; i++) {
    const day = Math.floor(Math.random() * 31) + 1;
    const date = new Date(2024, 0, day);

    const value = Math.floor(Math.random() * (500 - 10 + 1)) + 10;

    sales.push({
      data: date.toISOString().split("T")[0],
      valor: value,
    });
  }

  return sales;
}
