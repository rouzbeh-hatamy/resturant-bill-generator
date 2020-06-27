export function seperateNumbers(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1/');
}
