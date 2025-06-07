# 🧪 Projeto de Teste

Este é um projeto de teste para demonstração de funcionalidades básicas de uma aplicação de gestão de clientes. Todos os dados são mockados (sem persistência real), com autenticação simulada e operações CRUD fictícias.

---

## 📌 Funcionalidades

### 🔐 Autenticação
- **Login simulado com token JWT (mock)**  
- Validação de campos com `react-hook-form` e `zod`
- Toasts de erro/sucesso com `sonner`

### 👤 Clientes
- **Listagem de clientes mockados**
- **Criação de novos clientes com formulário validado**
- Ao criar um cliente, são geradas automaticamente:
  - Vendas com **datas aleatórias de janeiro/2024**
  - **Valores aleatórios** entre 10 e 500
  - Quantidade aleatória de vendas

### 📊 Gráficos
- Visualização de vendas por dia com **Recharts**
- Formatação de **data** e **valores monetários** com `Intl`

---

## 🧪 Mock de API

- Os dados de clientes vêm de um mock (`customersMock`)
- Endpoints disponíveis via API Routes (`/api/customers`):

### `GET /api/customers`
- Retorna todos os clientes mockados  
- Necessário header: `Authorization: Bearer <token>`

### `POST /api/customers`
- Adiciona um novo cliente com vendas simuladas  
- Payload:
  ```json
  {
    "name": "João da Silva",
    "email": "joao@example.com",
    "birthdate": "1990-10-10"
  }
