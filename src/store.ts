import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todos/todoList'

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
})
export default store;
export type AppDispatch = typeof store.dispatch;