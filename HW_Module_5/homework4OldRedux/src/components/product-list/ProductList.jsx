import React, {useEffect} from "react";
import useMetaData from "../../hooks/useMetaData";
import {useDispatch} from "react-redux";
import {getCategoriesAsync} from "../../redux/actions";
import ProductCard from "../product-card";
import s from "./ProductList.module.scss"
import PropTypes from "prop-types";

const ProductList =  () => {
  const dispatch = useDispatch()
  const {products, categories} = useMetaData()

  useEffect(() => {
    dispatch(getCategoriesAsync())
  }, [])

  const firstCapitalLetter = (category) => {
    return category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))
  }

  return (
    <section className={s.container}>
      {categories.map((category) =>
        <div key={category} className={s.productList}>
          <h1 className={s.productListTitle}>{firstCapitalLetter(category)}</h1>
          <ul className={s.productCardBox}>
            {products.map((data) =>
              data.category === category &&
              <ProductCard
                data={data}
                key={data.id}
              />
            )}
          </ul>
        </div>
      )}
    </section>
  )
}

export default ProductList

ProductList.prototype = {
  products: PropTypes.array.isRequired
}