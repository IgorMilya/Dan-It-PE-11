//Thunk

// import {createSlice} from "@reduxjs/toolkit";
// import {asyncProducts} from "./asyncProduct";
//
// const initialState = {
//   productData: [],
//   isLoading: false,
//   error: ''
// }
//
// const productsSlice = createSlice({
//   name: 'productData',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(asyncProducts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(asyncProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = ''
//         state.productData = action.payload;
//       })
//       .addCase(asyncProducts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   }
// })
//
// export default productsSlice.reducer

