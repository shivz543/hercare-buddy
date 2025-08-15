import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./PeriodTracker.css";

function PeriodTracker() {
  const [startDate, setStartDate] = useState(new Date());
  const [cycleLength, setCycleLength] = useState(28);
  const [nextPeriodDate, setNextPeriodDate] = useState(null);
  const [fertileRange, setFertileRange] = useState([]);

  useEffect(() => {
    if (startDate && cycleLength > 0) {
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
    } else {
      setNextPeriodDate(null);
      setFertileRange([]);
    }
  }, [startDate, cycleLength]);

  // Helper function to compare dates (year, month, day)
  const isSameDate = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  // Calendar tile class assignment
  const tileClassName = ({ date }) => {
    if (isSameDate(date, new Date(startDate))) return "period-start";
    if (nextPeriodDate && isSameDate(date, new Date(nextPeriodDate)))
      return "next-period";
    if (fertileRange.some((d) => isSameDate(d, date))) return "fertile-window";
    return null;
  };

  return (
    <div className="tracker-container">
      <h1 className="tracker-header">🩸 Period Tracker</h1>

      <div className="input-card">
        <label className="input-label">
          📆 Last Period Start Date:
          <input
            type="date"
            value={startDate.toISOString().split("T")[0]}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="input-field"
          />
        </label>

        <label className="input-label">
          🔁 Cycle Length (days):
          <input
            type="number"
            min={10}
            value={cycleLength}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCycleLength(val > 0 ? val : 10);
            }}
            className="input-field"
          />
        </label>

        {(cycleLength < 21 || cycleLength > 45) && (
          <div
            style={{ color: "#e11d48", fontWeight: 500, marginTop: "0.5rem" }}
          >
            Note: Cycles outside 21–45 days are less common but not abnormal—especially for PCOS/PCOD or teens. For irregularities, consult your healthcare provider.
          </div>
        )}
      </div>

      <div className="calendar-wrapper">
        <Calendar
          value={startDate}
          tileClassName={tileClassName}
          className="styled-calendar"
        />
      </div>

      <div
        className="dates-info"
        style={{ textAlign: "center", margin: "1.5rem 0", fontWeight: 600 }}
      >
        <p>
          🔜 <b>Next Period:</b>{" "}
          {nextPeriodDate ? nextPeriodDate.toLocaleDateString() : "N/A"}
        </p>
        <p>
          🌱 <b>Fertile Window:</b>{" "}
          {fertileRange.length > 0
            ? `${fertileRange[0].toLocaleDateString()} to ${fertileRange[
                fertileRange.length - 1
              ].toLocaleDateString()}`
            : "N/A"}
        </p>
      </div>

      <div className="legend">
        <p>
          <span className="dot period-start-dot" /> Period Start
        </p>
        <p>
          <span className="dot next-period-dot" /> Next Period
        </p>
        <p>
          <span className="dot fertile-window-dot" /> Fertile Window
        </p>
      </div>
    </div>
  );
}

export default PeriodTracker;
