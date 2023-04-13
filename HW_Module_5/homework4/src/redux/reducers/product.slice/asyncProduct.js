// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {request} from "../../../tools/request";
//
// export const asyncProducts = createAsyncThunk(
//   "product/asyncProducts",
//   async (_, thunkAPI) => {
//     try{
//       const {res} = await request({url: "/"})
//       return res.products;
//     }catch (e){
//       return thunkAPI.rejectWithValue("Not founded")
//     }
//   });