export {addData} from "./cardData.slice/cardData.slice"
export {plusNumber, minusNumber, getTotal} from "./total.slice/total.slice"
export {openFirstModal, closeFirstModal} from "./firstOpened.slice/firstOpened.slice"
export {openSecondModal, closeSecondModal} from "./secondOpened.slice/secondOpened.slice"
export {addCartProduct, removeCartProduct, removeAllCartProduct, emptyCart} from "./cart.slice/cart.slice"
export {useGetProductsQuery} from "./products.slice/products.slice"
export {useGetCategoriesQuery} from "./categories.slice/categories.slice"
export {
  useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation
} from "./favorite.slice/favorite.slice"
