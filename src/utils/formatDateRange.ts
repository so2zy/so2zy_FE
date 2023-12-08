export const formatDateRange = (
  startDate: Date | null,
  endDate: Date | null,
): string => {
  if (!startDate && !endDate) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const todayMonth = (today?.getMonth() + 1).toString();
    const todayDate = today?.getDate();
    const tomorrowMonth = (tomorrow.getMonth() + 1).toString();
    const tomorrowDate = tomorrow.getDate();

    return `${todayMonth}.${todayDate} ~ ${tomorrowMonth}.${tomorrowDate}, 1박`;
  }

  if (startDate && endDate) {
    const differDate = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    const startMonth = (startDate?.getMonth() + 1).toString();
    const startDay = startDate?.getDate();
    const endMonth = (endDate?.getMonth() + 1).toString();
    const endDay = endDate?.getDate();
    return `${startMonth}.${startDay} ~ ${endMonth}.${endDay}, ${differDate}박`;
  }

  return '';
};
