import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import {
  selectHabits,
  increment,
  decrement,
  onDelete,
  onAdd,
  onReset,
} from "./features/counter/counterSlice";

function App() {
  const habits = useSelector(selectHabits);
  const dispatch = useDispatch();

  const handleIncrement = (habit) => {
    dispatch(increment(habit));
  };
  const handleDecrement = (habit) => {
    dispatch(decrement(habit));
  };
  const handleDelete = (habit) => {
    dispatch(onDelete(habit));
  };
  const handleAdd = (name) => {
    dispatch(onAdd(name));
  };
  const handleReset = () => {
    dispatch(onReset());
  };

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
