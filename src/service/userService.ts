import Api from './api';

const getAllUsers = async () => {
    const response = await Api().get<IUser[]>('users');
    return response.data;
}

const getSingleUser = async (user_id: number) => {
    const response = await Api().get<IUser>(`users/?id=${user_id}`);
    return response.data;
}

export default { getAllUsers, getSingleUser }


