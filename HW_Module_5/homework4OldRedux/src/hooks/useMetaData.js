import {useDispatch, useSelector} from "react-redux";

const useMetaData = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.data)
  const products = useSelector(state => state.products.data)
  const favorite = useSelector(state => state.favorite.dataFav)
  const cardData = useSelector(state => state.cardData.cardData)
  const categories = useSelector(state => state.categories.categoriesData)
  const isFirstOpened = useSelector(state => state.firstOpened.isFirstOpened)
  const isSecondOpened = useSelector(state => state.secondOpened.isSecondOpened)

  return {
    dispatch,
    cart,
    products,
    favorite,
    cardData,
    categories,
    isFirstOpened,
    isSecondOpened,
  };
};

export default useMetaData;