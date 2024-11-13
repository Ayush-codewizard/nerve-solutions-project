import React from "react";
import { GoDotFill } from "react-icons/go";

function StrategyCards({ selectedView, selectedDate, strategyArray }) {
  // Finding the strategies for the selected view
  const strategiesForView = strategyArray.find(
    (view) => view.View === selectedView
  );
  // Getting the strategies for the selected date within the chosen view
  const strategiesForDate = strategiesForView?.Value[selectedDate] || [];

  // Counting the occurrences of each strategy
  const strategyCount = strategiesForDate.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      {strategiesForDate.length > 0 ? (
        <div className=" flex flex-col gap-4 w-96">
          {Object.entries(strategyCount).map(([name, count]) => (
            <div
              key={name}
              className=" flex justify-between items-center p-4 border-gray-300 border rounded-lg shadow"
            >
              <p>{name}</p>
              <p className="flex items-center justify-center gap-1">
                <GoDotFill />
                {count > 1 ? `${count} Strategies` : `${count} Strategy`}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">
          No strategies available for {selectedDate}
        </p>
      )}
    </div>
  );
}

export default StrategyCards;
