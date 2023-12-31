import React, {useState} from "react";
import {useOutletContext} from "react-router-dom";
import s from "./CartProducts.module.scss";
import {CloseCircleFilled} from "@ant-design/icons";
import PropTypes from "prop-types";

const CartProducts = ({item}) => {
  const [{setSecondModalData, addProduct, setCart, cart}] = useOutletContext()
  const initialCounter = cart.filter(el => el.id === item.id)
  const [counter, setCounter] = useState(initialCounter.length)

  const {images, price, title} = item
  const discountPrice = (price - price / 10).toFixed(0)
  const disabled = counter === 1 && "disabled"


  const removeProduct = () => {
    const index = cart.findIndex(el => el.id === item.id)
    if (index === -1) return
    cart.splice(index, 1)
    setCart([...cart])
  }

  const handleClick = (type) => {
    if (type === '+') {
      setCounter(prev => prev + 1)
      addProduct({
        item: item,
        setStateProduct: setCart,
      })
    } else {
      setCounter(prev => prev - 1)
      removeProduct()
    }
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
      <div className={s.cartProductItem}>${discountPrice * counter}</div>
    </li>
  )
}

export default CartProducts


CartProducts.prototype = {
  cart: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  setSecondModalData: PropTypes.func.isRequired
}