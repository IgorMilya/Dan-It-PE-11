import {IUser} from "../../types/IUser"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: "",
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload)
    }
  }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer