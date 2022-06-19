import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id: 1,
      value: "Hello",
      done: true
    },
    {
      id: 2,
      value: "World!",
      done: false
    }
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
})


export const { addTodo, delTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer