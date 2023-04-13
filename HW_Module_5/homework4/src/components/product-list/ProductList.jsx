import React from "react";
import ProductCard from "../product-card";
import {useGetCategoriesQuery, useGetProductsQuery} from "../../services/ProductsService";
import s from "./ProductList.module.scss"
import {LoadingOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";


const ProductList = () => {
  const {data, isLoading, error} = useGetProductsQuery(null)
  const {data: categoriesData} = useGetCategoriesQuery(null)
  const categories = !!categoriesData && categoriesData.slice(0, 6)

  const firstCapitalLetter = (category) => category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))

  return (
    <>
      {!isLoading &&
        <section className={s.container}>
          {!!categories && categories.map((category) =>
            <div key={category}>
              <h1 className={s.productListTitle}>{firstCapitalLetter(category)}</h1>
              <ul className={s.productCardBox}>
                {!!data?.products && data?.products.map((data) =>
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

      {isLoading && <div className={s.loader}><LoadingOutlined style={{fontSize: "50px"}}/></div>}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default ProductList

ProductList.prototype = {
  products: PropTypes.array.isRequired
}