export function formatCurrency(
  value: number,
  locale: string = "pt-BR",
  currency: string = "BRL"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

export function formatDate(
  dateString: string,
  locale: string = "pt-BR",
  options?: Intl.DateTimeFormatOptions
): string {
  const date = new Date(dateString.slice(0, 10).replace(/-/g, "/"));
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...options,
  }).format(date);
}
