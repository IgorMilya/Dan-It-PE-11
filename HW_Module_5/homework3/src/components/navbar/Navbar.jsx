import React from "react";

import cn from "classnames";
import s from "./Navbar.module.scss";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {Badge} from "antd";

const Navbar = ({favoriteProducts, cartProducts}) => {
  const offset = cartProducts.length > 5 && [15, 0];

  return (
    <div className={cn(s.navbar, s.container)}>
      <div className={s.navbarText}>
        <a href="#" className={s.headerTitle}>Hekto</a>
        <NavLink to="/product"
                 className={({isActive}) => (isActive ? cn(s.headerProducts, s.activeLink) : s.headerProducts)}>
          Products
        </NavLink>
      </div>
      <div className={s.headerBox}>

        <NavLink to="/favorite"
                 className={({isActive}) => (isActive ? cn(s.headerWishlist, s.activeLink) : s.headerWishlist)}>
          <span className={s.headerWishText}>Wishlist</span>
          <Badge count={favoriteProducts.length || 0} color={"purple"} size={"small"}>
            <HeartOutlined style={{fontSize: "18px", color: "white"}}/>
          </Badge>
        </NavLink>

        <NavLink to="/cart" className={s.cart}>
          <Badge count={cartProducts.length || 0} overflowCount={5} color={"purple"} offset={offset} size={"small"}>
            <ShoppingCartOutlined style={{fontSize: "22px", color: "white"}}/>
          </Badge>
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