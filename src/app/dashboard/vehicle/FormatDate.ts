export const formatDate = (date: Date | null): string => {
  if (!date) return "";

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-based.
  const day = date.getDate();

  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};


