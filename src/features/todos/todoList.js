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
    add: (state, action) => {
      state.todos.push(action.value)
    },
    del: (state) => {
      // state.filter((todo) => todo.id !== action.todo.id)
    },
    toggle: (state, action) => {
      // state.value += action.payload
    },
  },
})

// function reducer (state: any, action: any) {
//   switch (action.type) {
//     case ADD:
//       return state.concat(action.todo)
//     case DELETE:
//       return state.filter((todo: Todo) => todo.id !== action.todo.id)
//     case TOGGLE:
//       return action.todos
//     default:
//       return
//   }
// }

export const { add, del, toggle } = todoSlice.actions

export default todoSlice.reducer