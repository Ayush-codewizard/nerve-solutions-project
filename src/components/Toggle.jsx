import React from "react";

function Toggle({ selectedView, setSelectedView, setSelectedDate, dateArray }) {
  const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];

  const handleViewClick = (view) => {
    if (view !== selectedView) {
      setSelectedView(view); // Updating the selected view
      setSelectedDate(dateArray[0]); // Resetting the date to the first item in dateArray
    }
  };
  return (
    <div className="flex space-x-4 mb-4">
      {views.map((view) => (
        <button
          key={view}
          onClick={() => handleViewClick(view)}
          className={`px-4 py-2 rounded ${
            selectedView === view ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {view}
        </button>
      ))}
    </div>
  );
}

export default Toggle;
