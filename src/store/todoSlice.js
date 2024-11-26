import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [], // List of tasks
	filter: "all", // all | done | notDone
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload); // Add task with title, description, id, and isDone
		},
		deleteTask: (state, action) => {
			state.tasks = state.tasks.filter(
				(task) => task.id !== action.payload
			);
		},
		toggleTask: (state, action) => {
			const task = state.tasks.find(
				(task) => task.id === action.payload
			);
			if (task) task.isDone = !task.isDone;
		},
		editTask: (state, action) => {
			const { id, title, description } = action.payload;
			const task = state.tasks.find(
				(task) => task.id === id
			);
			if (task) {
				task.title = title;
				task.description = description;
			}
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
});

export const {
	addTask,
	deleteTask,
	toggleTask,
	editTask,
	setFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
