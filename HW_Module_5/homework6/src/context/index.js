import {createContext} from "react"
import useSetState from "../hooks/useSetState";

export const ContextStore = createContext({})

export const ContextProvider = ({children}) => {
  const {
    cardData, isFirstOpened, isSecondOpened, total, cart, categories, products, favorite,table,setTable, addData,
    openFirstModal, closeFirstModal, openSecondModal, closeSecondModal, getTotal, plusNumber, minusNumber, emptyCart,
    addCartProduct, removeCartProduct, removeAllCartProduct, getCategories, getProducts, getFavorite, deleteFavorite,
    postFavorite,
  } = useSetState()


  const value = {
    cardData, isFirstOpened, isSecondOpened, total, cart, categories, products, favorite,table,setTable, addData,
    openFirstModal, closeFirstModal, openSecondModal, closeSecondModal, getTotal, plusNumber, minusNumber, emptyCart,
    addCartProduct, removeCartProduct, removeAllCartProduct, getCategories, getProducts, getFavorite, deleteFavorite,
    postFavorite,
  }


  return <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
}

export default ContextProvider
