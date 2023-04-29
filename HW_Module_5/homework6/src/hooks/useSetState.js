import {useState} from "react";
import {request} from "../tools/request";

const useSetState = () => {
  const [cardData, setCartData] = useState({})
  const [isFirstOpened, setIsFirstOpened] = useState(false)
  const [isSecondOpened, setIsSecondOpened] = useState(false)
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartProducts')) || [])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [favorite, setFavorite] = useState([])
  const [table, setTable] = useState(true)

  const addData = data => setCartData(data)
  const openFirstModal = () => setIsFirstOpened(true)
  const closeFirstModal = () => setIsFirstOpened(false)
  const openSecondModal = () => setIsSecondOpened(true)
  const closeSecondModal = () => setIsSecondOpened(false)
  const getTotal = amount => setTotal(amount)
  const plusNumber = amount => setTotal(prev => prev + amount)
  const minusNumber = amount => setTotal(prev => prev - amount)
  const emptyCart = () => setCart([])
  const addCartProduct = product => setCart(prev => [...prev, product])

  const removeCartProduct = index => {
    cart.splice(index, 1)
    setCart([...cart])
  }
  const removeAllCartProduct = id => {
    const filteredCart = cart.filter(el => el.id !== id)

    setCart(filteredCart)
  }
  const getCategories = async () => {
    const {res} = await request({url: "/categories"})
    setCategories(res)
  }
  const getProducts = async () => {
    const {res} = await request({url: "/products"})
    setProducts(res)
  }
  const getFavorite = async () => {
    const {res} = await request({url: "/favorite"})
    setFavorite(res)
  }
  const deleteFavorite = async id => {
    const {res} = await request({
      url: `/favorite/${id}`,
      method: "DELETE"
    })
    setFavorite(favorite.filter(el => el.id !== id))
  }
  const postFavorite = async body => {
    const {res} = await request({
      url: `/favorite`,
      method: "POST",
      body
    })
    setFavorite(prev => [...prev, res])
  }

  return ({
    cardData, isFirstOpened, isSecondOpened, total, cart, categories, products, favorite, table, setTable, addData,
    openFirstModal, closeFirstModal, openSecondModal, closeSecondModal, getTotal, plusNumber, minusNumber, emptyCart,
    addCartProduct, removeCartProduct, removeAllCartProduct, getCategories, getProducts, getFavorite, deleteFavorite,
    postFavorite,
  })
}

export default useSetState