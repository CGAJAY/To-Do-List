import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/todoSlice";

const AddTask = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useDispatch();

	const handleAddTask = () => {
		if (title.trim() && description.trim()) {
			dispatch(
				addTask({
					id: Date.now(), // Unique identifier
					title,
					description,
					isDone: false, // Default to not done
				})
			);
			setTitle("");
			setDescription("");
		} else {
			alert("Both title and description are required!");
		}
	};

	return (
		<div className="add-task">
			<input
				type="text"
				placeholder="Task Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Task Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></textarea>
			<button onClick={handleAddTask}>Add Task</button>
		</div>
	);
};

export default AddTask;
