import React from "react";
import useMetaData from "../../hooks/useMetaData";
import CartProducts from "../../components/cart-products";
import Favorite from "../favorite";
import cn from "classnames";
import s from "./Cart.module.scss"
import PropTypes from "prop-types";

const Cart = () => {
  const {cart} = useMetaData()

  const idArray = [...new Set(cart.map((obj) => obj.id))];
  const uniqArray = idArray.map((id) => cart.find((obj) => obj.id === id))

  return (
    <>
      {!!uniqArray &&
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

              <ul className={s.cartListProduct}>
                {uniqArray.map((item) => <CartProducts item={item} key={item.id}/>)}
              </ul>

            </div>
          </div>
        </>
      }
      {
        cart.length === 0 &&
        <p>No Items</p>
      }
    </>
  )
}


export default Cart

Favorite.prototype = {
  favoriteProducts: PropTypes.array.isRequired,
}