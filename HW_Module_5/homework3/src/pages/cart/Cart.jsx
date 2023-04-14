import React from "react";
import {useOutletContext} from "react-router-dom";
import CartProducts from "../../components/cart-products";
import cn from "classnames";
import s from "./Cart.module.scss"
import PropTypes from "prop-types";

const Cart = () => {
  const [{cart}] = useOutletContext()

  const idArray = [...new Set(cart.map((obj) => obj.id))];
  const uniqArray = idArray.map((id) => cart.find((obj) => obj.id === id))

  return (
    <>
          <div className={s.cartBackground}>
            <h1 className={cn(s.cartTitle, s.container)}>Shopping Cart</h1>
          </div>

          <div className={s.container}>
            <div className={s.cartBox}>
              <ul className={s.cartNav}>
                <li className={s.cartNavItem}>Product</li>
                <li className={s.cartNavItem}>Price</li>
                <li className={s.cartNavItem}>Quantity</li>
                <li className={s.cartNavItem}>Total</li>
              </ul>
              {
                cart.length === 0 ?
                <p>No Items</p>
                  :
                  <ul className={s.cartListProduct}>
                    {uniqArray.map((item) => <CartProducts item={item} key={item.id}/>)}
                  </ul>
              }
            </div>
          </div>
        </>
  )
}


export default Cart

Cart.prototype = {
  cart: PropTypes.array.isRequired,
}