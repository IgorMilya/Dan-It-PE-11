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
        console.log(this.state.cart)
    }

    setIsSowed() {
        this.setState({isSowed: true})
    }


    render() {
        const {products, isSowed} = this.state
        return (
            <AntdLayout>
                <AntdHeader className={s.header}>
                    <div className={cn(s.navbar, s.container)}>
                        <a href={'#'} className={s.headerTitle}>Hekto</a>
                        <div className={s.headerBox}>
                            <a href="#" className={s.headerWishlist}>
                                <span className={s.headerWishText}>Wishlist</span>
                                <HeartOutlined/>
                            </a>
                            <a href="#" className={s.cart}>
                                <ShoppingCartOutlined style={{fontSize: "22px"}} onClick={() => this.setIsSowed()}/>
                            </a>
                        </div>
                    </div>
                </AntdHeader>

                <AntdContent>
                    <ProductList products={products} addProductInCart={this.addProductInCart}/>
                    {isSowed && <Cart/>}
                </AntdContent>
            </AntdLayout>
        )
    }
}

export default App