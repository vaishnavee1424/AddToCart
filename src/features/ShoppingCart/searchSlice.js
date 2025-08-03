import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name :'Search',
  initialState:'',
  reducers:{
    setSearchQuery:(state,action)=>action.payload
  }
})
export const {setSearchQuery}=searchSlice.actions;
export default searchSlice.reducer;