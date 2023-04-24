import {useState} from "react";
import useMetaData from "../../hooks/useMetaData";
import {minusNumber, plusNumber} from "../../redux/reducers";
import {removeCartProduct, addCartProduct, addData, openSecondModal} from "../../redux/reducers";
import s from "./CartProducts.module.scss";
import {CloseCircleFilled} from "@ant-design/icons";

const CartProducts = ({item}) => {
  const {cart, dispatch} = useMetaData()
  const {images, price, title, id} = item
  const initialCounter = cart.filter(el => el.id === id)
  const [counter, setCounter] = useState(initialCounter.length)

  const discountPrice = Number((price - price / 10).toFixed(0))
  const allPricesForItem = discountPrice * counter
  const disabled = counter === 1 && "disabled"


  const removeProduct = () => {
    const index = cart.findIndex(el => el.id === item.id)
    if (index === -1) return
    dispatch(removeCartProduct({index}))
  }

  const addMoreCartProducts = (item) => dispatch(addCartProduct(item))

  const handleClick = (type) => {
    if (type === '+') {
      setCounter(prev => prev + 1)
      addMoreCartProducts(item)
      dispatch(plusNumber(discountPrice))
    } else {
      setCounter(prev => prev - 1)
      removeProduct()
      dispatch(minusNumber(discountPrice))
    }
  }

  const setSecondModalData = (data) => {
    dispatch(addData({...data, totalPrice: allPricesForItem}))
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
