//Thunk

// import {createSlice} from "@reduxjs/toolkit";
// import {asyncCategories} from "./asyncCategories";
//
// const initialState = {
//   categoriesData: [],
//   isLoading: false,
//   error: ''
// }
//
// const categoriesSlice = createSlice({
//   name: 'categoriesData',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(asyncCategories.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(asyncCategories.fulfilled, (state, action) => {
//         state.categoriesData = action.payload;
//       })
//       .addCase(asyncCategories.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   }
// })
//
// export default categoriesSlice.reducer