import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/todoSlice";
import Task from "./Task";

const ListTask = () => {
	const { tasks, filter } = useSelector(
		(state) => state.todo
	);
	const dispatch = useDispatch();

	const filteredTasks =
		filter === "done"
			? tasks.filter((task) => task.isDone)
			: filter === "notDone"
			? tasks.filter((task) => !task.isDone)
			: tasks;

	return (
		<div className="list-task">
			<div className="filter-buttons">
				<button onClick={() => dispatch(setFilter("all"))}>
					All
				</button>
				<button onClick={() => dispatch(setFilter("done"))}>
					Done
				</button>
				<button
					onClick={() => dispatch(setFilter("notDone"))}
				>
					Not Done
				</button>
			</div>
			<div className="tasks">
				{filteredTasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default ListTask;
