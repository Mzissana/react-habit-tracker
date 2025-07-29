import React from "react";
import HabitItem from "./HabitItem";
import styles from "./HabitList.module.scss";

const HabitList = ({
  habits,
  onDeleteHabit,
  className,
  onIncrementHabit,
  onResetHabit,
}) => {
  return (
    <ul className={styles.list}>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onDelete={onDeleteHabit}
          value={habit.count}
          onIncrement={onIncrementHabit}
          onReset={onResetHabit}
        />
      ))}
    </ul>
  );
};

export default HabitList;
