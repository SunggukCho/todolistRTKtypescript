import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todos/todoList'

export default configureStore({
  reducer: {
    todos: todoReducer
  },
})