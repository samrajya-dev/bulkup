import React from "react";

function MealPlan() {
  const meals = [
    { time: "7:00 AM", meal: "Masala Oats + Milk + Eggs", cost: 50 },
    { time: "1:00 PM", meal: "Chapatis + Dal + Sabzi", cost: 60 },
    // Add other meals here
  ];

  return (
    <div>
      <h2>Meal Plan</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Meal</th>
            <th>Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => (
            <tr key={index}>
              <td>{meal.time}</td>
              <td>{meal.meal}</td>
              <td>{meal.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MealPlan;
