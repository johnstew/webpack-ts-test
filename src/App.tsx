import React from "react";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

interface CounterState {
  value: number;
}

const fakeAsyncCall = (value: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 500);
  });

const asyncIncrement = createAsyncThunk(
  "counter/asyncIncrement",
  async (value: number, { rejectWithValue }) => {
    try {
      const incrementValue = await fakeAsyncCall(value);
      return incrementValue;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = { value: 0 };

const countSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      asyncIncrement.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    );
  },
});

const { reducer, actions } = countSlice;
const { increment, decrement } = actions;

const store = configureStore({
  reducer,
});

interface Props {
  name: string;
}

const App: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const count = useSelector<CounterState>((state) => state.value);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleAsyncIncrement = () => dispatch(asyncIncrement(3));

  return (
    <div>
      <h1>Counter</h1>
      <span>Count: {count}</span>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleAsyncIncrement}>
        Async Increment
      </button>
    </div>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
