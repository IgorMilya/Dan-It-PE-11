import React, {Component} from "react";
import {request} from "../../../tools/request";
import ProductCard from "../../../components/product-card";
// import { Pagination } from 'antd';
import s from "./ProductList.module.scss"

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async getProductsCategories() {
        const {res} = await request({url: '/categories'});
        if (res) {
            this.setState({categories: res})
            this.setState({isLoad: false})
        }
    }

    componentDidMount() {
        this.getProductsCategories()
    }

    render() {
        const {categories} = this.state;
        const {products, addProductInCart} = this.props;
        return (
             <section className={s.container}>
            {categories.map((category) => {
                const firstCapitalLetter =
                    category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))

                return (
                    <div key={category} className={s.productList}>
                        <h1 className={s.productListTitle}>{firstCapitalLetter}</h1>
                        <div className={s.productCardBox}>
                            <ProductCard category={category} products={products} addProductInCart={addProductInCart}/>
                        </div>
                        {/*<Pagination defaultCurrent={1} total={20} onChange={(e) => console.log(e)} />*/}
                    </div>
                )
            })}
        </section>

        )
    }
}

export default ProductList