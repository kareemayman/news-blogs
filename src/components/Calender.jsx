import { format } from "date-fns"
import React, { useEffect, useState } from "react"

export default function Calender() {

  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [today, setToday] = useState(date.getDate());
  const [firstDay, setFirstDay] = useState(new Date(year, month, 1).getDay());
  const [lastDay, setLastDay] = useState(new Date(year, month + 1, 0).getDate());

  useEffect(() => {
    setDate(new Date(year, month));
    setFirstDay(new Date(year, month, 1).getDay());
    setLastDay(new Date(year, month + 1, 0).getDate());
  }, [month, year]);

  function increaseMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  function decreaseMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  return (
    <div className="calender">
      <div className="flex">
        <h2 className="month-year comfortaa">{format(date, "MMMM, yyyy")}</h2>

        <div className="change-month">
          <button className="prev" onClick={decreaseMonth}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="next" onClick={increaseMonth}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <div className="days">
        <span>SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
      </div>

      <div className="dates">
        {Array.from({ length: firstDay }).map((_, index) => (
          <span key={`empty-${index}`}></span>
        ))}

        {Array.from({ length: lastDay }).map((_, index) => (
          <span
            key={`month-day-${index}`}
            className={
              index + 1 === today && month === new Date().getMonth() && year === new Date().getFullYear()
                ? "current-day"
                : ""
            }
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  )
}
