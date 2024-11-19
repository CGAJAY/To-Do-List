import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
	// State for storing tasks
	const [tasks, setTasks] = useState([]);

	// Load tasks from localStorage when the app initializes
	useEffect(() => {
		const storedTasks = JSON.parse(
			localStorage.getItem("tasks")
		);
		if (storedTasks) setTasks(storedTasks);
	}, []);

	// Save tasks to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	// Add a new task
	const addTask = (task) => {
		setTasks([...tasks, task]);
	};

	// Update an existing task
	const updateTask = (updatedTask) => {
		setTasks(
			tasks.map((task) =>
				task.id === updatedTask.id ? updatedTask : task
			)
		);
	};

	// Delete a task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle task completion
	const toggleTaskCompletion = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, completed: !task.completed }
					: task
			)
		);
	};

	return (
		<div className="app-container">
			<h1>To-Do List Application</h1>
			<TaskForm addTask={addTask} />
			<TaskList
				tasks={tasks}
				updateTask={updateTask}
				deleteTask={deleteTask}
				toggleTaskCompletion={toggleTaskCompletion}
			/>
		</div>
	);
};

export default App;
