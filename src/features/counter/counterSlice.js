import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habits: [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ],
};

export const counterSlice = createSlice({
  name: "habitCounter",
  initialState,
  reducers: {
    increment: (state, { payload: habit }) => {
      state.habits.forEach((item) => {
        if (item.id === habit.id) {
          item.count += 1;
        }
        return item;
      });
    },
    decrement: (state, { payload: habit }) => {
      state.habits.forEach((item) => {
        if (item.id === habit.id) {
          item.count -= 1;
        }
        return item;
      });
    },
    onDelete: (state, { payload: habit }) => {
      state.habits.filter((item) => item.id !== habit.id);
    },
    onAdd: (state, { payload: name }) => {
      const newHabit = { id: Date.now(), name, count: 0 };
      state.habits.push(newHabit);
    },
    onReset: (state) => {
      state.habits.forEach((habit) => {
        if (habit.count !== 0) {
          habit.count = 0;
        }
        return habit;
      });
    },
  },
});

export const {
  increment,
  decrement,
  onDelete,
  onAdd,
  onReset,
} = counterSlice.actions;

export const selectHabits = (state) => state.habitCounter.habits;

export default counterSlice.reducer;
