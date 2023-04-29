import CartList from "../../components/cart-list";
import PurchaseForm from "../../components/purchase-form";
import cn from "classnames";
import s from "./Cart.module.scss"
import CartIcon from "../../assets/Daco_5212497.png";
import {useContext} from "react";
import {ContextStore} from "../../context";

const Cart = () => {
  const {cart} = useContext(ContextStore)

  return (
    <>
      <div className={s.cartBackground}>
        <h1 className={cn(s.cartTitle, s.container)}>Shopping Cart</h1>
      </div>
      <div className={cn(s.container, cart?.length === 0 ? s.cartIconBox : s.cart)}>
        {cart?.length === 0
          ?
          <div className={s.cartIcon}>
            <img src={CartIcon} alt="CartIcon"/>
          </div>
          :
          <>
            <CartList/>
            <PurchaseForm/>
          </>
        }
      </div>
    </>
  )
}


export default Cart
