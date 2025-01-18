import React from "react";

function WorkoutPlan() {
  const workouts = [
    { day: "Day 1", focus: "Chest, Shoulders, Triceps" },
    { day: "Day 2", focus: "Legs, Glutes" },
    // Add other workout days here
  ];

  return (
    <div>
      <h2>Workout Routine</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <strong>{workout.day}:</strong> {workout.focus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutPlan;
