import ProductCard from "../product-card";
import s from "./ProductList.module.scss"
import {useContext, useEffect} from "react";
import {ContextStore} from "../../context";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";
import cn from "classnames";


const ProductList = () => {
  const {products, categories, getCategories, table, setTable} = useContext(ContextStore)
  useEffect(() => {
    getCategories()
  }, [])
  const firstCapitalLetter = (category) => category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))

  return (
    <section className={cn(s.productList, s.container)}>
      <div className={s.settingView}>
        <button className={table ? cn(s.tableButton, s.active) : s.tableButton} onClick={() => setTable(true)}><AppstoreOutlined style={{fontSize: "24px"}}/></button>
        <button className={!table ? cn(s.listButton, s.active) : s.listButton} onClick={() => setTable(false)}><BarsOutlined style={{fontSize: "24px"}}/></button>
      </div>
      {!!categories && categories?.map((category) =>
        <div key={category}>
          <h1 className={s.productListTitle}>{firstCapitalLetter(category)}</h1>
          <ul className={s.productCardBox}>
            {products?.map((data) =>
              category.includes(data.category) &&
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