import {useContext, useEffect} from "react";
import CartProducts from "../cart-products";
import s from "./CartList.module.scss";
import {ContextStore} from "../../context";

const CartList = () => {
  const {cart, total, getTotal} = useContext(ContextStore)

  const idArray = [...new Set(cart.map((obj) => obj.id))];
  const uniqArray = idArray.map((id) => cart.find((obj) => obj.id === id))

  useEffect(() => {
    const amount = cart.reduce((prev, curr) => {
      const discountPrice = Number((curr.price - curr.price / curr.discountPercentage).toFixed(0))
      return prev + discountPrice;
    }, 0);
    getTotal(amount)
  }, [])


  return (
    <div className={s.cartBox}>
      <ul className={s.cartNav}>
        <li className={s.cartNavItem}>Product</li>
        <li className={s.cartNavItem}>Price</li>
        <li className={s.cartNavItem}>Quantity</li>
        <li className={s.cartNavItem}>Total</li>
      </ul>
      <ul className={s.cartListProduct}>
        {uniqArray.map((item) => <CartProducts item={item} key={item.id}/>)}
        <li className={s.total}>Total amount: {total}</li>
      </ul>
    </div>
  )
}

export default CartList