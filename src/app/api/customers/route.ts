import { NextRequest, NextResponse } from "next/server";

import { customersMock, generateRandomSales, originalCustomersMock } from "@/app/api/customers/mock-data";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized: Bearer token missing or invalid" },
      { status: 401 }
    );
  }

  return NextResponse.json(customersMock);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized: Bearer token missing or invalid" },
      { status: 401 }
    );
  }

  if (!body) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const randomSales = generateRandomSales()
  customersMock.data.clientes.push({
    info: {
      nomeCompleto: body.name,
      detalhes: {
        email: body.email,
        nascimento: body.birthdate,
      },
    },
    estatisticas: {
      vendas: randomSales,
    },
  });
  customersMock.meta.registroTotal = customersMock.data.clientes.length;
  
  return NextResponse.json({ status: "Cliente adicionado com sucesso!" });
}

export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized: Bearer token missing or invalid" },
      { status: 401 }
    );
  }

  customersMock.meta = JSON.parse(JSON.stringify(originalCustomersMock.meta));
  customersMock.data = JSON.parse(JSON.stringify(originalCustomersMock.data));

  return NextResponse.json({ status: "Clientes resetados com sucesso!" });
}