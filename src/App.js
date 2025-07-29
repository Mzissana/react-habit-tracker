import { useState, useEffect } from "react";
import "./App.scss";
import Button from "./components/Ui/Button/Button";
import HabitForm from "./components/HabitForm/HabitForm";
import HabitList from "./components/HabitList/HabitList";

function App() {
  const [habitName, setHabitName] = useState("");
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!habitName.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitName,
      count: 0,
    };

    setHabits([...habits, newHabit]);
    setHabitName("");
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const incrementHabitCount = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, count: habit.count + 1 } : habit
      )
    );
  };

  const resetHabitCount = (id) => {
    setHabits(
      habits.map((habit) => (habit.id === id ? { ...habit, count: 0 } : habit))
    );
  };

  const resetHabits = () => {
    setHabits([]);
    localStorage.removeItem("habits");
  };

  return (
    <div className="App">
      <h1>Habits</h1>
      <HabitForm
        habitName={habitName}
        setHabitName={setHabitName}
        onAddHabit={addHabit}
      />

      {habits.length > 0 && (
        <HabitList
          onDeleteHabit={deleteHabit}
          habits={habits}
          onIncrementHabit={incrementHabitCount}
          onResetHabit={resetHabitCount}
        />
      )}

      {habits.length > 0 && (
        <button
          onClick={resetHabits}
          className="reset-button">
          Сбросить всё
        </button>
      )}
    </div>
  );
}

export default App;
