import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'; // Optional: for custom styling

function PeriodTracker() {
  const [startDate, setStartDate] = useState(new Date());
  const [cycleLength, setCycleLength] = useState(28);
  const [nextPeriodDate, setNextPeriodDate] = useState(null);
  const [fertileRange, setFertileRange] = useState([]);

  useEffect(() => {
    if (startDate) {
      const next = new Date(startDate);
      next.setDate(next.getDate() + cycleLength);
      setNextPeriodDate(next);

      const fertileStart = new Date(startDate);
      fertileStart.setDate(startDate.getDate() + cycleLength - 14 - 3);

      const fertileEnd = new Date(startDate);
      fertileEnd.setDate(startDate.getDate() + cycleLength - 14 + 1);

      const range = [];
      for (
        let d = new Date(fertileStart);
        d <= fertileEnd;
        d.setDate(d.getDate() + 1)
      ) {
        range.push(new Date(d));
      }

      setFertileRange(range);
    }
  }, [startDate, cycleLength]);

  const tileClassName = ({ date }) => {
    const isSameDate = (d1, d2) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    if (isSameDate(date, new Date(startDate))) return "bg-red-200";
    if (nextPeriodDate && isSameDate(date, new Date(nextPeriodDate))) return "bg-rose-300";
    if (fertileRange.some((d) => isSameDate(d, date))) return "bg-green-200";

    return null;
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-rose-600 mb-6">🩸 Period Tracker</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full mb-6">
        <label className="block mb-4">
          📆 Last Period Start Date:
          <input
            type="date"
            value={startDate.toISOString().split("T")[0]}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="w-full mt-2 p-2 border rounded"
          />
        </label>

        <label className="block mb-4">
          🔁 Cycle Length (days):
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
            className="w-full mt-2 p-2 border rounded"
          />
        </label>
      </div>

      <Calendar
        value={startDate}
        tileClassName={tileClassName}
        className="rounded-xl shadow-md"
      />

      <div className="mt-4 text-sm text-gray-600 text-center">
        🔴 Red = Period Start <br />
        🌸 Pink = Next Period <br />
        💚 Green = Fertile Window
      </div>
    </div>
  );
}

export default PeriodTracker;

