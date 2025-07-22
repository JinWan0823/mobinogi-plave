export const convertToKstTime = (time: string) => {
  const utcDate = new Date(time);
  const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  const formattedKstDate = kstDate.toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formattedKstDate;
};
