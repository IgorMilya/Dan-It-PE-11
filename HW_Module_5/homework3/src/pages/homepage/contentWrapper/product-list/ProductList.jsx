import React, {useEffect, useState} from "react";
import {request} from "../../../../tools/request";
import ProductCard from "../../../../components/product-card";
import s from "./ProductList.module.scss"
import PropTypes from "prop-types";

const ProductList = (props) => {
    const [categories, setCategories] = useState([])

    const getProductsCategories = async () => {
        const {res} = await request({url: '/categories'});
        if (!res) return
        setCategories(res.slice(0, 6))
    }

    useEffect(() => {
        getProductsCategories()
    }, [])

    const {products, addProductInFavorite, deleteProductInFavorite, setModalData} = props;

    return (
        <section className={s.container}>
            {categories.map((category) => {
                const firstCapitalLetter =
                    category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))

                return (
                    <div key={category} className={s.productList}>
                        <h1 className={s.productListTitle}>{firstCapitalLetter}</h1>
                        <ul className={s.productCardBox}>
                            {products.map((data) => {
                                if (data.category === category)
                                    return (
                                        <ProductCard
                                            data={data}
                                            key={data.id}
                                            addProductInFavorite={addProductInFavorite}
                                            deleteProductInFavorite={deleteProductInFavorite}
                                            setModalData={setModalData}
                                        />
                                    )
                            })}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}

ProductList.propTypes = {
    products: PropTypes.array,
    addProductInFavorite: PropTypes.func,
    deleteProductInFavorite: PropTypes.func,
    setModalData: PropTypes.func
}

export default ProductList