import React from "react";
import Input from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
import styles from "./HabitForm.module.scss";

const HabitForm = ({ habitName, setHabitName, onAddHabit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit();
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}>
      <Input
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className={styles.input}
      />
      <Button
        className={styles.button}
        type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default HabitForm;
