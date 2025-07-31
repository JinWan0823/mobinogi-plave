export const convertToKstTime = (time: string) => {
  const utcDate = new Date(time);
  const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  return kstDate.toISOString().slice(0, 10); // "YYYY-MM-DD"
};
