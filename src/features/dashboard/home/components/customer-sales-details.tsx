import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Customer } from "@/shared/types/customer";
import { formatCurrency, formatDate } from "@/shared/utils/formatters";
import { getTotalSalesValue } from "../helpers/statistics";

type CustomerSalesDetailsProps = {
  customer: Customer;
};

export function CustomerSalesDetails({ customer }: CustomerSalesDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="ml-auto">
          Detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Todas as compras</DialogTitle>
          <DialogDescription>
            Compras do cliente {customer.name}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {!!customer.statistics.sales.length ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customer.statistics.sales.map((sale, i) => (
                  <TableRow key={sale.value + i}>
                    <TableCell>{formatDate(sale.date.toISOString())}</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(sale.value)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(getTotalSalesValue(customer))}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          ) : (
            <span className="text-sm mt-2 text-muted-foreground">
              Nenhum dado encontrado para este cliente.
            </span>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
