export function useDate(date: any) {
   if (!date) return '';
   const formatDate = new Date(date);
   return date ? formatDate.toLocaleDateString() : '';
}
    