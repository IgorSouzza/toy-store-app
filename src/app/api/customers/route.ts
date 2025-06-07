import { NextRequest, NextResponse } from "next/server";

import { customersMock } from "@/app/api/customers/mock-data";

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

  customersMock.data.clientes.push({
    info: {
      nomeCompleto: body.name,
      detalhes: {
        email: body.email,
        nascimento: body.birthdate,
      },
    },
    estatisticas: {
      vendas: [],
    },
  });
  customersMock.meta.registroTotal = customersMock.data.clientes.length;
  
  return NextResponse.json({ status: "Cliente adicionado com sucesso!" });
}
