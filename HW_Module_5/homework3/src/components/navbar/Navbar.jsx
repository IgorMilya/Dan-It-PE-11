import React from "react";

import cn from "classnames";
import s from "./Navbar.module.scss";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Navbar = ({favoriteProducts, cartProducts}) => {

    return (
        <div className={cn(s.navbar, s.container)}>
            <div className={s.navbarText}>
                <a href="#" className={s.headerTitle}>Hekto</a>
                <NavLink to="/product" className={({isActive}) => (isActive ? cn(s.headerProducts, s.activeLink) : s.headerProducts)}>
                    Products
                </NavLink>
            </div>
            <div className={s.headerBox}>
                <NavLink to="/favorite" className={({isActive}) => (isActive ? cn(s.headerWishlist, s.activeLink) : s.headerWishlist)}>
                    <span className={s.headerWishText}>Wishlist</span>
                    <HeartOutlined/>
                    <span className={s.cartCount}>{favoriteProducts.length || 0}</span>
                </NavLink>
                <NavLink to="/cart" className={({isActive}) => (isActive ? cn(s.cart, s.activeLink) : s.cart)}>
                    <ShoppingCartOutlined style={{fontSize: "22px"}}/>
                    <span className={s.cartCount}>{cartProducts.length || 0}</span>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar

Navbar.prototype = {
    setIsShowed: PropTypes.func.isRequired,
    favoriteProducts: PropTypes.array.isRequired,
    cartProducts: PropTypes.array.isRequired
}