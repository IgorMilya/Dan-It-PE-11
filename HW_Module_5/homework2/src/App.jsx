import {Component} from "react";
import ProductList from "./pages/homepage/product-list";
import Cart from "./pages/homepage/cart";
import cn from "classnames"

import s from "./App.module.scss";
import {Layout as AntdLayout} from "antd";
import {ShoppingCartOutlined, HeartOutlined} from "@ant-design/icons";
import {request} from "./tools/request";

const {Header: AntdHeader, Content: AntdContent} = AntdLayout;

class App extends Component {
    state = {
        products: [],
        cart: [],
        favorite: [],
        isSowed: false
    }

    async getProducts() {
        const {res} = await request({url: "/"})
        this.setState({products: res})
    }

    componentDidMount() {
        this.getProducts()
    }



    addProductInCart = (item) => {
        this.setState({cart: [...this.state.cart, item]})

        const cartItem = JSON.parse( localStorage.getItem('cartProducts')) || [];
        cartItem.push(item)
        localStorage.setItem('cartProducts', JSON.stringify(cartItem));
    }

    addProductInFavorite = (item) => {
        this.setState({favorite: [...this.state.favorite, item]})

        const cartItem = JSON.parse( localStorage.getItem('favoriteProducts')) || [];
        cartItem.push(item)
        localStorage.setItem('favoriteProducts', JSON.stringify(cartItem));
    }

    deleteProductInFavorite = (item) => {
        const newFavorite = [...this.state.favorite].filter(el => el.id !== item.id)
        this.setState({favorite: newFavorite});
    }

    setIsSowed() {
        this.setState({isSowed: true})
    }

    resetIsSowed() {
        this.setState({isSowed: false})
    }



    render() {
        const {products, isSowed} = this.state

        const cartProducts = localStorage.getItem('cartProducts');
        const cartProductsArray = JSON.parse(cartProducts) || [];

        const favoriteProducts = localStorage.getItem('favoriteProducts');
        const favoriteProductsArray = JSON.parse(favoriteProducts) || [];

        return (
            <AntdLayout>
                <AntdHeader className={s.header}>
                    <div className={cn(s.navbar, s.container)}>
                        <div className={s.navbarText}>
                            <a href="#" className={s.headerTitle}>Hekto</a>
                            <a href="#" className={s.headerProducts} onClick={() => this.resetIsSowed()}> Products</a>
                        </div>
                        <div className={s.headerBox}>
                            <a href="#" className={s.headerWishlist}>
                                <span className={s.headerWishText}>Wishlist</span>
                                <HeartOutlined/>
                                <span className={s.cartCount}>{favoriteProductsArray.length || 0}</span>
                            </a>
                            <a href="#" className={s.cart}>
                                <ShoppingCartOutlined style={{fontSize: "22px"}} onClick={() => this.setIsSowed()}/>
                                <span className={s.cartCount}>{cartProductsArray.length || 0}</span>
                            </a>
                        </div>
                    </div>
                </AntdHeader>

                <AntdContent>
                    {!isSowed && <ProductList
                        products={products} addProductInCart={this.addProductInCart}
                        addProductInFavorite={this.addProductInFavorite}
                        deleteProductInFavorite={this.deleteProductInFavorite}
                    />}
                    {isSowed && <Cart cart={cartProductsArray}/>}
                </AntdContent>

            </AntdLayout>
        )
    }
}

export default App