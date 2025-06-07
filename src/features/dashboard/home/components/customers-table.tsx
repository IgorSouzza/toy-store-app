import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Customer } from "@/shared/types/customer";

type CustomersTableProps = {
  customers: Customer[];
};

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <div className="px-4 lg:px-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Data de nascimento</TableHead>
            <TableHead>Alfabeto</TableHead>
            <TableHead className="text-right">Total vendas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.birthday}</TableCell>
              <TableCell>ABCDEFGHIJKLMNOPQRSTUVXYZ</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
