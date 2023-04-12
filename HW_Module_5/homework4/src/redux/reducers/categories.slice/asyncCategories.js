import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../../tools/request";

export const asyncCategories = createAsyncThunk(
  "categories/asyncCategories",
  async (_, thunkAPI) => {
    try{
      const {res} = await request({url: '/categories'})
      if (!res) return
      return res.slice(0, 6)
    }catch (e){
      return thunkAPI.rejectWithValue("Not founded")
    }
  });