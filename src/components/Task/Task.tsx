import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { fetchSingleTask } from "../../store/task-actions";
import Checkbox from "../Checkbox/Checkbox";
import EmptyTask from "./EmptyTask";
import "./task.scss";

const Task: FC = () => {
    const dispatch = useAppDispatch();
    const allTasks = useAppSelector((state) => state.task.all_tasks);

    const completeTask = (task_id: number): void => {
        dispatch(fetchSingleTask(task_id));
    };

    return (
        <ul className="task">
            {
                (allTasks.length == 0) ? (<EmptyTask />) : (
                    allTasks.map((task) => (
                        <li key={task.id} className="task__item">
                            <Checkbox task_id={task.id} checked={task.completed} completeTask={completeTask} />
                            {task.title}
                        </li>
                    ))
                )
            }
        </ul>
    );
};

export default Task;
