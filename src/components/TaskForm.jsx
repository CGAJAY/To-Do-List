// components/TaskForm.js
import React, { useState } from "react";

// TaskForm component responsible for adding new tasks
const TaskForm = ({ addTask }) => {
	// State to store the task name entered by the user
	const [taskName, setTaskName] = useState("");
	// State to store the description entered by the user
	const [description, setDescription] = useState("");

	// Function to handle the form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if both task name and description fields are filled
		if (taskName.trim() && description.trim()) {
			// Call the addTask function (received via props) to add the task
			addTask({
				id: Date.now(), // Generate a unique ID for the task
				name: taskName, // Use the entered task name
				description, // Use the entered description
				completed: false, // Default to an incomplete task
			});
			// Clear the form fields after adding the task
			setTaskName("");
			setDescription("");
		} else {
			alert("Both fields are required!");
		}
	};

	return (
		<form className="task-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Task Name"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<textarea
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></textarea>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
