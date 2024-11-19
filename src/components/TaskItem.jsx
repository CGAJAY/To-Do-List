import React, { useState } from "react";

const TaskItem = ({
	task,
	updateTask,
	deleteTask,
	toggleTaskCompletion,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [taskName, setTaskName] = useState(task.name);
	const [description, setDescription] = useState(
		task.description
	);

	// Save updated task
	const saveTask = () => {
		if (taskName.trim() && description.trim()) {
			updateTask({ ...task, name: taskName, description });
			setIsEditing(false);
		} else {
			alert("Both fields are required!");
		}
	};

	return (
		<div
			className={`task-item ${
				task.completed ? "completed" : ""
			}`}
		>
			{isEditing ? (
				<div>
					<input
						className="editName"
						type="text"
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
					/>
					<textarea
						className="editDesc"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
					<button onClick={saveTask}>Save</button>
					<button onClick={() => setIsEditing(false)}>
						Cancel
					</button>
				</div>
			) : (
				<div>
					<h3>{task.name}</h3>
					<p>{task.description}</p>
					<button
						onClick={() => toggleTaskCompletion(task.id)}
					>
						{task.completed
							? "Mark as Incomplete"
							: "Mark as Complete"}
					</button>
					<button onClick={() => setIsEditing(true)}>
						Edit
					</button>
					<button onClick={() => deleteTask(task.id)}>
						Delete
					</button>
				</div>
			)}
		</div>
	);
};

export default TaskItem;
