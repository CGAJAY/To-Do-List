import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
	const [tasks, setTasks] = useState([]);

	// Load tasks from localStorage
	useEffect(() => {
		const storedTasks = localStorage.getItem("tasks");
		if (storedTasks) {
			try {
				const parsedTasks = JSON.parse(storedTasks);
				if (Array.isArray(parsedTasks)) {
					setTasks(parsedTasks);
				}
			} catch (error) {
				console.error(
					"Error loading tasks from localStorage:",
					error
				);
			}
		}
	}, []);

	// Save tasks to localStorage
	useEffect(() => {
		if (Array.isArray(tasks)) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}, [tasks]);

	const addTask = (task) =>
		setTasks((prevTasks) => [...prevTasks, task]);

	const updateTask = (updatedTask) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === updatedTask.id ? updatedTask : task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks((prevTasks) =>
			prevTasks.filter((task) => task.id !== id)
		);
	};

	const toggleTaskCompletion = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
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
