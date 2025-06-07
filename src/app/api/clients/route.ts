import { NextRequest, NextResponse } from "next/server";

import { clientsMock } from "@/app/api/clients/mock-data";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized: Bearer token missing or invalid" },
      { status: 401 }
    );
  }

  return NextResponse.json(clientsMock);
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

  if (!body || !body.info || !body.estatisticas) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  clientsMock.data.clientes.push(body);
  clientsMock.meta.registroTotal = clientsMock.data.clientes.length;

  return NextResponse.json({ status: "Cliente adicionado com sucesso!" });
}
