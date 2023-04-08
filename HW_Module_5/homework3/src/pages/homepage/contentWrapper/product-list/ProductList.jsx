import React, {useEffect, useState} from "react";
import {request} from "../../../../tools/request";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../../../../components/product-card";
import s from "./ProductList.module.scss"
import PropTypes from "prop-types";

const ProductList =  () => {
  const [categories, setCategories] = useState([])
  const [{products}] = useOutletContext()

  const getProductsCategories = async () => {
    const {res} = await request({url: '/categories'});
    if (!res) return
    setCategories(res.slice(0, 6))
  }

  useEffect(() => {
    getProductsCategories()
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