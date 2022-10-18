export function formatDate(date: string) {
  const formatedDate = new Intl.DateTimeFormat("pt-Br").format(new Date(date));

  return formatedDate;
}
