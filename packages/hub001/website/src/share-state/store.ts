import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return await response.json()
})

const store = configureStore({
  reducer: {
    data: (state:any, action:any) => {
      switch (action.type) {
        case fetchData.fulfilled.type:
          return action.payload
        default:
          return state
      }
    },
  },
  middleware: [],
})

export default store
