import { format } from "date-fns"
import React from "react"

export default function Calender() {
  let date = new Date()
  let month = date.getMonth()
  let year = date.getFullYear()
  let today = date.getDate()

  // see where the first day of the month falls
  let firstDay = new Date(year, month, 1).getDay()

  // get the last day of the month
  let lastDay = new Date(year, month + 1, 0).getDate()

  return (
    <div className="calender">
      <div className="flex">
        <h2 className="month-year comfortaa">{format(date, "MMMM, yyyy")}</h2>

        <div className="change-month">
          <button className="prev">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="next">
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
          <span key={index}></span>
        ))}

        {Array.from({ length: lastDay }).map((_, index) => (
          <span
            key={index}
            className={
              index + 1 === today && month === new Date().getMonth()
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
