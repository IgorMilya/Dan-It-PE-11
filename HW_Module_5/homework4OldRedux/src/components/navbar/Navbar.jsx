import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import cn from "classnames";
import s from "./Navbar.module.scss";
import {Badge} from "antd";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const Navbar = () => {
  const cart = useSelector(state => state.cart.data)
  const favorite = useSelector(state => state.favorite.dataFav)

  const offset = cart.length > 5 && [15, 0];

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
          <Badge count={favorite.length || 0} color={"purple"} size={"small"}>
            <HeartOutlined style={{fontSize: "18px", color: "white"}}/>
          </Badge>
        </NavLink>

        <NavLink to="/cart" className={s.cart}>
          <Badge count={cart.length || 0} overflowCount={5} color={"purple"} offset={offset} size={"small"}>
            <ShoppingCartOutlined style={{fontSize: "22px", color: "white"}}/>
          </Badge>
        </NavLink>

      </div>
    </div>
  )
}
export default Navbar

Navbar.prototype = {
  cartProducts: PropTypes.array.isRequired,
  favoriteProducts: PropTypes.array.isRequired
}