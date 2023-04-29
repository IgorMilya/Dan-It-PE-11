import {useContext, useState} from "react";
import s from "./CartProducts.module.scss";
import {CloseCircleFilled} from "@ant-design/icons";
import {ContextStore} from "../../context";

const CartProducts = ({item}) => {
  const {cart, removeCartProduct, addCartProduct, plusNumber, minusNumber, addData, openSecondModal} = useContext(ContextStore)
  const {images, price, title, id, discountPercentage} = item

  const initialCounter = cart.filter(el => el.id === id)
  const [counter, setCounter] = useState(initialCounter.length)

  const discountPrice = Number((price - price / discountPercentage).toFixed(0))
  const allPricesForItem = discountPrice * counter
  const disabled = counter === 1 && "disabled"


  const removeProduct = () => {
    const index = cart.findIndex(el => el.id === id)
    if (index === -1) return
    removeCartProduct(index)
  }

  const handleClick = (type) => {
    if (type === '+') {
      setCounter(prev => prev + 1)
      addCartProduct(item)
     plusNumber(discountPrice)
    } else {
      setCounter(prev => prev - 1)
      removeProduct()
      minusNumber(discountPrice)
    }
  }

  const setSecondModalData = (data) => {
    addData({...data, totalPrice: allPricesForItem})
    openSecondModal(true)
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
