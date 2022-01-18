import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redux/todo'

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})
