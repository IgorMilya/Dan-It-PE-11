import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers:{
      addTodo(state, action) {
        state.todos.push({
          id:1,
          text: action.payload.text
        })
      },
    removeTodo(state, action){
        state.todos = state.todos.filter(el => el.id !== action.payload.id)
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer