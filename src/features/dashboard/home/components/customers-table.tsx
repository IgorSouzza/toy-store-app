import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Customer } from "@/shared/types/customer";
import { formatCurrency, formatDate } from "@/shared/utils/formatters";
import {
  getFirstMissingLetterInName,
  getTotalSalesValue,
} from "../helpers/statistics";
import { Badge } from "@/shared/components/ui/badge";

type CustomersTableProps = {
  customers: Customer[];
};

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <div className="px-4 lg:px-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Data de nascimento</TableHead>
            <TableHead>Primeira letra ausente</TableHead>
            <TableHead className="text-right">Total vendas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{formatDate(customer.birthday)}</TableCell>
              <TableCell className="uppercase">
                <Badge variant='outline'>{getFirstMissingLetterInName(customer.name)}</Badge>
              </TableCell>
              <TableCell className="text-right">
                {formatCurrency(getTotalSalesValue(customer))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
