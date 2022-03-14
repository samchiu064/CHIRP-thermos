export function currency(num) {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}
