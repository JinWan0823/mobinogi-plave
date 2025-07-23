export default function WeeklyDate() {
  const today = new Date();
  const month = new Date().getMonth() + 1;

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const weekNumber = Math.ceil((today.getDate() + firstDay.getDay()) / 7);

  return (
    <p className="text-sm text-center font-bold">
      {month}월 {weekNumber}주차
    </p>
  );
}
