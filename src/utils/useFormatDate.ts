// yyyy-mm-dd 변환해주는 함수
export const formatDate = (date: Date): string => {
  if (!(date instanceof Date)) {
    date = new Date();
  }

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
