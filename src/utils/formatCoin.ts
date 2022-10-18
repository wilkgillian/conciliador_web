export function formatCoin(value: number) {
  const formatValue = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return formatValue;
}
