import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./actionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

// @ts-ignore
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // usersFetching (state) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess (state, action:  PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload
        // },
        // usersFetchingError (state, action:  PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    // This need for createAsyncThunk (ReduxToolkit)
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
            });
    }
})

export default userSlice.reducer;