export default function WeeklyDate() {
  const month = new Date().getMonth() + 1;

  return <p className="text-sm text-center font-bold">{month}월 3주차</p>;
}
