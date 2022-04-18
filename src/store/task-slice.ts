import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialTaskState: TaskDataType = {
    all_tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialTaskState,
    reducers: {
        setTasks(state, action: PayloadAction<ITask[]>) {
            state.all_tasks = action.payload;
        },
        setTaskComplete(state, action: PayloadAction<ITask>) {
            let task = state.all_tasks.find(task => task.id === action.payload.id);

            if (task) {
                task.completed = !task.completed;
            }
            console.log(task?.completed);
        }
    }
})

export default taskSlice;