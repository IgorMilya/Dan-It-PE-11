import CartList from "../../components/cart-list";
import PurchaseForm from "../../components/purchase-form";
import cn from "classnames";
import s from "./Cart.module.scss"
import PropTypes from "prop-types";

const Cart = () => {

  return (
    <>
      <div className={s.cartBackground}>
        <h1 className={cn(s.cartTitle, s.container)}>Shopping Cart</h1>
      </div>
      <div className={cn(s.container, s.cart)}>
        <CartList/>
        <PurchaseForm/>
      </div>
    </>
  )
}


export default Cart
