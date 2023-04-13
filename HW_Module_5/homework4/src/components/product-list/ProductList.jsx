import React, {useEffect} from "react";
import useMetaData from "../../hooks/useMetaData";
import {asyncCategories} from "../../redux/reducers/categories.slice/asyncCategories";
import ProductCard from "../product-card";
import s from "./ProductList.module.scss"
import {LoadingOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const ProductList = () => {
  const {products: {productData, isLoading, error}, categories: {categoriesData}, dispatch} = useMetaData()

  useEffect(() => {
    dispatch(asyncCategories())
  }, [dispatch])

  const firstCapitalLetter = (category) => {
    return category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))
  }

  return (
    <>
      {!isLoading &&
        <section className={s.container}>
          {categoriesData.map((category) =>
            <div key={category} className={s.productList}>
              <h1 className={s.productListTitle}>{firstCapitalLetter(category)}</h1>
              <ul className={s.productCardBox}>
                {productData.map((data) =>
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
      }

      {isLoading && <div className={s.loader}><LoadingOutlined style={{fontSize: "50px"}} /></div>}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default ProductList

ProductList.prototype = {
  products: PropTypes.array.isRequired
}