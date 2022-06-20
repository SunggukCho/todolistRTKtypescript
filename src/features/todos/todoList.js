import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = 'http://localhost:3001/initialState';

const getTodo = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const fetchInitialState = createAsyncThunk(
  API_URL, async () => {
    const response = await getTodo();
    return response
  }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    delTodo: (state, action) => {
      const newTodos = state.filter(todo => todo.id !== action.payload.id)
      return newTodos
    },
    toggleTodo: (state, action) => {
      const newTodos = state.map(todo => todo.id !== action.payload.id ? todo : {...todo, done: !todo.done})
      return newTodos
    },
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchInitialState.fulfilled, (state, action) => {
        state.push(...action.payload)
      })
  }
})


export const { addTodo, delTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer