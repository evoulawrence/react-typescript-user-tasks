interface IUser {
    id: number
    name: string
}

interface ITask {
    id: number
    userId: number
    title: string
    completed: boolean
}

type UserProps = {
    user: IUser
}

type UserDataType = {
    all_users: IUser[]
    single_user: IUser
}

type TaskDataType = {
    all_tasks: ITask[]
    
}



