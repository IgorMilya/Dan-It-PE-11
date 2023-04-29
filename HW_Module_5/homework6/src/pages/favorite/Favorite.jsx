import ProductCard from "../../components/product-card";
import cn from "classnames";
import s from "./Favorite.module.scss"
import PropTypes from "prop-types";
import {useContext} from "react";
import {ContextStore} from "../../context";

const Favorite = () => {
  const {favorite} = useContext(ContextStore)

  return (
    <>
      {!!favorite && favorite.length !== 0 ?
        <ul className={cn(s.favoriteProduct, s.container)} data-testid="product-card">
          {favorite.map((item) => <ProductCard data={item} key={item.id}/>)}
        </ul>
        :
        <p>No Items</p>
      }
    </>
  )
}

export default Favorite

Favorite.prototype = {
  favorite: PropTypes.array.isRequired,
}