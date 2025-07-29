import React from "react";
import Button from "../Ui/Button/Button";
import Input from "../Ui/Input/Input";
import styles from "./HabitItem.module.scss";

const HabitItem = ({ habit, onDelete, onIncrement, onReset }) => {
  return (
    <li className={styles.item}>
      <span> {habit.name}</span>
      <Input
        value={habit.count}
        readOnly
      />

      <Button onClick={() => onIncrement(habit.id)}>+</Button>
      <Button onClick={() => onReset(habit.id)}>Res</Button>
      <Button onClick={() => onDelete(habit.id)}>Удалить</Button>
    </li>
  );
};

export default HabitItem;
