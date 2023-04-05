import React from "react";

import cn from "classnames";
import s from "./Navbar.module.scss";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const Navbar = (props) => {


    const {setIsShowed, favoriteProducts, cartProducts} = props

    return (
        <div className={cn(s.navbar, s.container)}>
            <div className={s.navbarText}>
                <a href="#" className={s.headerTitle}>Hekto</a>
                <a href="#" className={s.headerProducts}
                   onClick={() => setIsShowed(false, false)}> Products</a>
            </div>
            <div className={s.headerBox}>
                <a href="#" className={s.headerWishlist} onClick={() => setIsShowed(false, true)}>
                    <span className={s.headerWishText}>Wishlist</span>
                    <HeartOutlined/>
                    <span className={s.cartCount}>{favoriteProducts.length || 0}</span>
                </a>
                <a href="#" className={s.cart}>
                    <ShoppingCartOutlined
                    style={{fontSize: "22px"}}
                    onClick={() => setIsShowed(true, false)}
                    />
                    <span className={s.cartCount}>{cartProducts.length || 0}</span>
                </a>
            </div>
        </div>
    )
}
export default Navbar

Navbar.prototype={
    setIsShowed: PropTypes.func.isRequired,
    favoriteProducts: PropTypes.array.isRequired,
    cartProducts: PropTypes.array.isRequired
}