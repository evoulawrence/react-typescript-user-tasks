import Api from './api';

const getAllTasks = async (user_id: number) => {
    const response = await Api().get<ITask[]>(`todos/?userId=${user_id}`);
    return response.data;
}

const getSingleTask = async (task_id: number) => {
    const response = await Api().get(`todos/${task_id}`);
    return response.data;
}

export default { getAllTasks, getSingleTask }
