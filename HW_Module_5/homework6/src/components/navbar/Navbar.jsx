import useMetaData from "../../hooks/useMetaData";
import {Link, NavLink} from "react-router-dom";
import cn from "classnames";
import s from "./Navbar.module.scss";
import {Badge} from "antd";
import * as Icon from "@ant-design/icons";
import PropTypes from "prop-types";
import {useGetFavoritesQuery} from "../../redux/reducers";

const Navbar = () => {
  const {cart} = useMetaData()
  const {data: favorite} = useGetFavoritesQuery()
  const offset = cart.length > 5 && [15, 0];

  return (
    <div className={cn(s.navbar, s.container)}>
      <div className={s.navbarText}>
        <Link to={"/product"} className={s.headerTitle} >Hekto</Link>
        <NavLink to="/product"
                 className={({isActive}) => (isActive ? cn(s.headerProducts, s.activeLink) : s.headerProducts)}>
          Products
        </NavLink>
      </div>
      <div className={s.headerBox}>

        <NavLink to="/favorite"
                 className={({isActive}) => (isActive ? cn(s.headerWishlist, s.activeLink) : s.headerWishlist)}>
          <span className={s.headerWishText}>Wishlist</span>
          <Badge count={!!favorite && favorite.length} color={"purple"} size={"small"}>
            <Icon.HeartOutlined style={{fontSize: "18px", color: "white"}}/>
          </Badge>
        </NavLink>

        <NavLink to="/cart" className={s.cart}>
          <Badge count={cart.length || 0} overflowCount={5} color={"purple"} offset={offset} size={"small"}>
            <Icon.ShoppingCartOutlined style={{fontSize: "22px", color: "white"}}/>
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