import React from "react";
import useMetaData from "../../hooks/useMetaData";
import ProductCard from "../../components/product-card";
import cn from "classnames";
import s from "./Favorite.module.scss"
import PropTypes from "prop-types";

const Favorite = () => {
  const {favorite} = useMetaData()

  return (
    <>
      {!!favorite && favorite.length !== 0 ?
        <ul className={cn(s.favoriteProduct, s.container)}>
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