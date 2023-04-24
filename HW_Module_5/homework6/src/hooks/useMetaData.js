import {useDispatch, useSelector} from "react-redux";

const useMetaData = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.data)
  const cardData = useSelector(state => state.cardData.cardData)
  const isFirstOpened = useSelector(state => state.firstOpened.isFirstOpened)
  const isSecondOpened = useSelector(state => state.secondOpened.isSecondOpened)

  return {
    dispatch,
    cart,
    cardData,
    isFirstOpened,
    isSecondOpened,
  };
};

export default useMetaData;