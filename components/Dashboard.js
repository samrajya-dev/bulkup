import React from "react";
import MealPlan from "./MealPlan";
import WorkoutPlan from "./WorkoutPlan";
import StreakChart from "./StreakChart";

function Dashboard() {
  return (
    <div>
      <MealPlan />
      <WorkoutPlan />
      <StreakChart />
    </div>
  );
}

export default Dashboard;
