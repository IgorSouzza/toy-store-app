import { Customer } from "@/shared/types/customer";

export function getTopSalesVolumeCustomer(customers: Customer[]) {
  let topCustomer: Customer | null = null;
  let maxVolume = 0;

  for (const customer of customers) {
    const total = customer.statistics.sales.reduce(
      (sum, sale) => sum + sale.value,
      0
    );
    if (total > maxVolume) {
      maxVolume = total;
      topCustomer = customer;
    }
  }

  return topCustomer ? { customer: topCustomer, totalVolume: maxVolume } : null;
}

export function getTopAverageSaleValueCustomer(customers: Customer[]) {
  let topCustomer: Customer | null = null;
  let maxAverage = 0;

  for (const customer of customers) {
    const sales = customer.statistics.sales;
    if (sales.length === 0) continue;

    const avg = sales.reduce((sum, sale) => sum + sale.value, 0) / sales.length;
    if (avg > maxAverage) {
      maxAverage = avg;
      topCustomer = customer;
    }
  }

  return topCustomer
    ? { customer: topCustomer, averageValue: maxAverage }
    : null;
}

export function getTopPurchaseFrequencyCustomer(customers: Customer[]) {
  let topCustomer: Customer | null = null;
  let maxFrequency = 0;

  for (const customer of customers) {
    const count = customer.statistics.sales.length;
    if (count > maxFrequency) {
      maxFrequency = count;
      topCustomer = customer;
    }
  }

  return topCustomer
    ? { customer: topCustomer, purchaseCount: maxFrequency }
    : null;
}

export function getTotalSalesValue(customer: Customer): number {
  return customer.statistics.sales.reduce((sum, sale) => sum + sale.value, 0);
}

export function getFirstMissingLetterInName(name: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const normalizedName = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  const lettersInName = new Set(normalizedName);

  for (const letter of alphabet) {
    if (!lettersInName.has(letter)) {
      return letter;
    }
  }

  return "-";
}
