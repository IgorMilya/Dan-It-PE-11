import React, {Component} from "react";
import ProductList from "./pages/homepage/product-list";
import Favorite from "./pages/homepage/favorite";
import Cart from "./pages/homepage/cart";
import Button from "./UI/button";
import Modal from "./UI/modal";
import {request} from "./tools/request";
import cn from "classnames"

import s from "./App.module.scss";
import {Layout as AntdLayout} from "antd";
import {ShoppingCartOutlined, HeartOutlined} from "@ant-design/icons";

const {Header: AntdHeader, Content: AntdContent} = AntdLayout;

class App extends Component {
    state = {
        cart: [],
        products: [],
        favorite: [],
        cardData: {},
        isOpened: false,
        isShowedCart: false,
        isShowedFavorite: false
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
        this.addLocalProduct(item, 'cartProducts')
    }

    addProductInFavorite = (item, isFilled) => {
        this.setState({favorite: [...this.state.favorite, item]})
        this.addLocalProduct(item, 'favoriteProducts', isFilled)
    }

    addLocalProduct(item, storage, isFilled) {

        const storageArray = JSON.parse(localStorage.getItem(`${storage}`)) || [];
        isFilled ? storageArray.push({...item, isFilled}) : storageArray.push(item)
        localStorage.setItem(`${storage}`, JSON.stringify(storageArray));

    }


    deleteProductInFavorite = (item) => {
        const newFavorite = [...this.state.favorite].filter(el => el.id !== item.id)
        this.setState({favorite: newFavorite});
        this.deleteLocalProduct(item, 'favoriteProducts')
    }

    deleteProductInCart = (item) => {
        const newFavorite = [...this.state.cart].filter(el => el.id !== item.id)
        this.setState({cart: newFavorite});
        this.deleteLocalProduct(item, 'cartProducts')
    }

    deleteLocalProduct(item, storage) {
        const storageArray = JSON.parse(localStorage.getItem(`${storage}`)) || [];
        const newStorage = storageArray.filter(el => el.id !== item.id)
        localStorage.setItem(`${storage}`, JSON.stringify(newStorage));
    }


    setIsShowed(cart, favorite) {
        this.setState({isShowedCart: cart})
        this.setState({isShowedFavorite: favorite})
    }

    setModalData = (data) => {
        this.setState({cardData: data})
        this.setState({isOpened: true})
        document.body.style.overflow = 'hidden'
    }

    resetIsModal() {
        this.setState({isOpened: false})
        document.body.style.overflow = 'auto'
    }


    render() {
        const {products, isOpened, cardData, isShowedCart, isShowedFavorite} = this.state

        const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

        const actions = (
            <>
                <Button
                    backgroundColor={"darkred"}
                    text={"Ok"}
                    onClick={() => {
                        this.addProductInCart(cardData)
                        this.resetIsModal()
                    }}
                    className={'modal-button'}
                />
                <Button
                    backgroundColor={"darkred"}
                    text={"Cancel"}
                    onClick={() => this.resetIsModal()}
                    className={'modal-button'}
                />
            </>
        )

        return (
            <AntdLayout>
                <AntdHeader className={s.header}>
                    <div className={cn(s.navbar, s.container)}>
                        <div className={s.navbarText}>
                            <a href="#" className={s.headerTitle}>Hekto</a>
                            <a href="#" className={s.headerProducts}
                               onClick={() => this.setIsShowed(false, false)}> Products</a>
                        </div>
                        <div className={s.headerBox}>
                            <a href="#" className={s.headerWishlist} onClick={() => this.setIsShowed(false, true)}>
                                <span className={s.headerWishText}>Wishlist</span>
                                <HeartOutlined/>
                                <span className={s.cartCount}>{favoriteProducts.length || 0}</span>
                            </a>
                            <a href="#" className={s.cart}>
                                <ShoppingCartOutlined style={{fontSize: "22px"}}
                                                      onClick={() => this.setIsShowed(true, false)}/>
                                <span className={s.cartCount}>{cartProducts.length || 0}</span>
                            </a>
                        </div>
                    </div>
                </AntdHeader>

                <AntdContent>
                    {!isShowedCart && !isShowedFavorite &&
                        <ProductList
                            products={products} addProductInCart={this.addProductInCart}
                            addProductInFavorite={this.addProductInFavorite}
                            deleteProductInFavorite={this.deleteProductInFavorite}
                            setModalData={this.setModalData}
                        />}

                    {isShowedFavorite &&
                        <Favorite favorite={favoriteProducts} deleteProductInFavorite={this.deleteProductInFavorite}/>}
                    {isShowedCart && <Cart cart={cartProducts} deleteProductInCart={this.deleteProductInCart}/>}
                </AntdContent>
                <Modal
                    isOpened={isOpened}
                    backgroundModal={'firstModal'}
                    backgroundHeader={'firstHeader'}
                    header={'Do u wanna add this product?'}
                    subText={'Are you sure you wanna add it?'}
                    closeButton={() => this.resetIsModal()}
                    actions={actions}
                />
            </AntdLayout>
        )
    }

}


export default App