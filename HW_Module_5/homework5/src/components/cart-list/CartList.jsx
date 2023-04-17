import {useEffect} from "react";
import {useSelector} from "react-redux";
import useMetaData from "../../hooks/useMetaData";
import {getTotal} from "../../redux/reducers";
import CartProducts from "../cart-products";
import s from "./CartList.module.scss";

const CartList = () => {
  const {cart, dispatch} = useMetaData()
  const {total} = useSelector(state => state.total)

  const idArray = [...new Set(cart.map((obj) => obj.id))];
  const uniqArray = idArray.map((id) => cart.find((obj) => obj.id === id))

  useEffect(() => {
    const amount = cart.reduce((total, el) => {
      const discountPrice = Number((el.price - el.price / 10).toFixed(0))
      return total + discountPrice;
    }, 0);
    dispatch(getTotal(amount))
  }, [])


  return (
    <div className={s.cartBox}>
      <ul className={s.cartNav}>
        <li className={s.cartNavItem}>Product</li>
        <li className={s.cartNavItem}>Price</li>
        <li className={s.cartNavItem}>Quantity</li>
        <li className={s.cartNavItem}>Total</li>
      </ul>
      {cart.length === 0
        ?
        <p>No Items</p>
        :
        <>
          <ul className={s.cartListProduct}>
            {uniqArray.map((item) => <CartProducts item={item} key={item.id}/>)}
            <li className={s.total}>Total amount: {total}</li>
          </ul>
        </>
      }
    </div>
  )
}

export default CartList