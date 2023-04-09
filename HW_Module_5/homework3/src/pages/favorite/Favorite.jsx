import React from "react";
import {useOutletContext} from "react-router-dom";
import ProductCard from "../../components/product-card";
import cn from "classnames";
import s from "./Favorite.module.scss"
import PropTypes from "prop-types";

const Favorite = () => {
  const [{favoriteProducts}] = useOutletContext()

  return (
    <>
      {!!favoriteProducts &&
        <>
          <ul className={cn(s.favoriteProduct, s.container)}>
            {favoriteProducts.map((item) => <ProductCard data={item} key={item.id}/>)}
          </ul>
        </>
      }
      {favoriteProducts.length === 0 &&
        <p>No Items</p>
      }
    </>
  )
}

export default Favorite

Favorite.prototype = {
  favoriteProducts: PropTypes.array.isRequired,
}