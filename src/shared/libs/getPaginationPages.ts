
export const getPaginationPages = (
  page: number,
  totalPages: number
): number[] => {
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

