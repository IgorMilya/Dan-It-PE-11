import React, {useState} from "react";
import useMetaData from "../../hooks/useMetaData";
import {addData} from "../../redux/reducers/cardData.slice/cardData.slice";
import {openSecondModal} from "../../redux/reducers/secondOpened.slice/secondOpened.slice";
import {addCartProduct, removeCartProduct} from "../../redux/reducers/cart.slice/cart.slice";
import s from "./CartProducts.module.scss";
import {CloseCircleFilled} from "@ant-design/icons";
import PropTypes from "prop-types";

const CartProducts = ({item}) => {
  const {cart, dispatch} = useMetaData()
  const initialCounter = cart.filter(el => el.id === item.id)
  const [counter, setCounter] = useState(initialCounter.length)

  const {images, price, title} = item
  const discountPrice = (price - price / 10).toFixed(0)
  const allPricesForItem = discountPrice * counter
  const disabled = counter === 1 && "disabled"

  const removeProduct =() => {
    const storageIndex = cart.findIndex(el => el.id === item.id)
    if (storageIndex === -1) return
    dispatch(removeCartProduct(storageIndex))
  }

  const addMoreCartProducts = (item) => dispatch(addCartProduct(item))

  const handleClick = (type) => {
    if (type === '+') {
      setCounter(prev => prev + 1)
      addMoreCartProducts(item)
    } else {
      setCounter(prev => prev - 1)
      removeProduct()
    }
  }

  const setSecondModalData = (data) => {
    dispatch(addData(data))
    dispatch(openSecondModal(true))
  }

  return (
    <li key={item.id} className={s.cartProduct}>
      <div className={s.cartContextProduct}>
        <div className={s.cartBackgroundImg}>
          <div className={s.cartImgBox}>
            <img className={s.cartImg} src={images[0]} alt="product"/>
            <CloseCircleFilled
              className={s.cartCross}
              onClick={() => setSecondModalData(item)}
            />
          </div>
        </div>
        <p className={s.cartProductTitle}>{title}</p>
      </div>
      <div className={s.cartProductItem}>${discountPrice}</div>
      <div className={s.cartProductItem}>
        <button className={s.counterAction} onClick={() => handleClick("+")}>+</button>
        <span className={s.counter}>{counter}</span>
        <button className={s.counterAction} disabled={disabled} onClick={() => handleClick("-")}>-</button>
      </div>
      <div className={s.cartProductItem}>${allPricesForItem}</div>
    </li>
  )
}

export default CartProducts

CartProducts.prototype = {
  cart: PropTypes.array.isRequired,
  item: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  setSecondModalData: PropTypes.func.isRequired
}