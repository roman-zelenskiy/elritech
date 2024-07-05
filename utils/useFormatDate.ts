export function useFormatDate(date: Date) {

  return typeof date === 'string' ? date : date.toDateString();
}
  