import React from "react";

function DateDropdown({ selectedDate, setSelectedDate, dates }) {
  return (
    <select
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="mb-4 p-2 w-96 border border-gray-300 rounded-lg"
    >
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
}

export default DateDropdown;
