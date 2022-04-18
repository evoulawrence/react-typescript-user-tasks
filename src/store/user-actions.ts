import userSlice from "./user-slice";
import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import UserService from "../service/userService";

export const userActions = userSlice.actions;

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: IUser[] = await UserService.getAllUsers();
        console.log(userActions.setUsers(response));
        dispatch(userActions.setUsers(response));
    }
}

export const fetchSingleUser = (user_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: IUser = await UserService.getSingleUser(user_id);
        dispatch(userActions.setSingleUser(response));
    }
}