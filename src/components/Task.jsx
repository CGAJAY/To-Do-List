import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	toggleTask,
	editTask,
	deleteTask,
} from "../store/todoSlice";

const Task = ({ task }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(task.title);
	const [newDescription, setNewDescription] = useState(
		task.description
	);
	const dispatch = useDispatch();

	const handleEdit = () => {
		if (newTitle.trim() && newDescription.trim()) {
			dispatch(
				editTask({
					id: task.id,
					title: newTitle,
					description: newDescription,
				})
			);
			setIsEditing(false);
		} else {
			alert("Both title and description are required!");
		}
	};

	return (
		<div className={`task ${task.isDone ? "done" : ""}`}>
			{isEditing ? (
				<div>
					<input
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
					/>
					<textarea
						value={newDescription}
						onChange={(e) =>
							setNewDescription(e.target.value)
						}
					></textarea>
					<button onClick={handleEdit}>Save</button>
				</div>
			) : (
				<div>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
					<div className="btns">
						<button
							onClick={() => dispatch(toggleTask(task.id))}
						>
							{task.isDone
								? "Mark as Not Done"
								: "Mark as Done"}
						</button>
						<button
							onClick={() => setIsEditing(!isEditing)}
						>
							{isEditing ? "Cancel" : "Edit"}
						</button>
						<button
							onClick={() => dispatch(deleteTask(task.id))}
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Task;
