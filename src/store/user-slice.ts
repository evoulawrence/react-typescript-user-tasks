import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserDataType = {
    all_users: [],
    single_user: {
        "id": 0,
        "name": ""
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.all_users = action.payload;
        },
        setSingleUser(state, action: PayloadAction<IUser>) {
            state.single_user = action.payload;
        }
    }
})

export default userSlice;