import './checkbox.scss';

type Props = {
    task_id: number
    completeTask: (task_id: number) => void
    checked: boolean
}

const Checkbox: React.FC<Props> = ({task_id, completeTask, checked}) => {
    return (
        <input
            type="checkbox"
            className="task__checkbox"
            value={task_id}
            onChange={() => completeTask(task_id)}
            checked={checked}
        />
    )
}

export default Checkbox;