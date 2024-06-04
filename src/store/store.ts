import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { User } from "../pages/types";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (numberOfUsers: string) => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${
        numberOfUsers.length ? numberOfUsers : 1
      }`
    );
    const data = await response.json();
    return data.results as User[];
  }
);

type UsersState = {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as User[],
    status: "idle",
    error: null,
  } as UsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
