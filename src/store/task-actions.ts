import taskSlice from "./task-slice";
import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import TaskService from "../service/taskService";

export const taskActions = taskSlice.actions;

export const fetchTasks = (user_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: ITask[] = await TaskService.getAllTasks(user_id);
        dispatch(taskActions.setTasks(response));
    }
}

export const fetchSingleTask = (task_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: ITask = await TaskService.getSingleTask(task_id);
        dispatch(taskActions.setTaskComplete(response));
    }
}