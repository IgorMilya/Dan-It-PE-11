import React from "react";
import s from "./Cart.module.scss"
import PropTypes from "prop-types";

const Cart = ({cart, deleteProductInCart}) => {

    return (
        <>
            {!!cart &&
                <>
                    <div className={s.cartBackground}>
                        <h1 className={s.cartTitle}>Shopping Cart</h1>
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
                                {cart.map((item) => {
                                    const {images, price, title} = item
                                    const discountPrice = (price - price / 10).toFixed(0)
                                    return (
                                        <li key={item.id} className={s.cartProduct}>
                                            <div className={s.cartContextProduct}>
                                                <div className={s.cartBackgroundImg}>
                                                    <div className={s.cartImgBox}>
                                                        <img className={s.cartImg} src={images[0]} alt="product"/>
                                                    </div>
                                                </div>
                                                <p className={s.cartProductTitle}>{title}</p>
                                            </div>
                                            <div className={s.cartProductItem}>${discountPrice}</div>
                                            <div className={s.cartProductItem}>
                                                <div className={s.counterAction}>+</div>
                                                <span className={s.counter}>1</span>
                                                <div className={s.counterAction}>-</div>
                                            </div>
                                            <div className={s.cartProductItem}>${discountPrice * 1}</div>
                                        </li>
                                    )
                                })}
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


Cart.propTypes = {
    cart: PropTypes.array,
    deleteProductInCart: PropTypes.func,
}
export default Cart