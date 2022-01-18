import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload]
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(item => item.id !== action.payload)
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
