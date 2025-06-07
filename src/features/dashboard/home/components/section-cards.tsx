import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Customer } from "@/shared/types/customer";
import {
  getTopAverageSaleValueCustomer,
  getTopPurchaseFrequencyCustomer,
  getTopSalesVolumeCustomer,
} from "../helpers/statistics";
import { formatCurrency } from "@/shared/utils/formatters";

type SectionCardsProps = {
  customers: Customer[];
};

export function SectionCards({ customers }: SectionCardsProps) {
  const topSalesVolumeCustomer = getTopSalesVolumeCustomer(customers);
  const topAverageSaleValueCustomer = getTopAverageSaleValueCustomer(customers);
  const topPurchaseFrequencyCustomer =
    getTopPurchaseFrequencyCustomer(customers);

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Maior volume de vendas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(topSalesVolumeCustomer?.totalVolume || 0)}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {topSalesVolumeCustomer?.customer.name}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Maior média de valor por venda</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(topAverageSaleValueCustomer?.averageValue || 0)}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {topSalesVolumeCustomer?.customer.name}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Maior frequência de compras</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {topPurchaseFrequencyCustomer?.purchaseCount}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {topSalesVolumeCustomer?.customer.name}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
