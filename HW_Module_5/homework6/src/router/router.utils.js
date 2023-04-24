import React from "react";
import ProductList from "../components/product-list";
import ContentWrapper from "../pages/homepage/content-wrapper";
import Favorite from "../pages/favorite";
import Cart from "../pages/cart";

export const ROUTER = {
    HOME: {path: "/", element: <ContentWrapper/>},
    PRODUCT: {path: "product", element: <ProductList />},
    CART: {path: "cart", element: <Cart />},
    FAVORITE: {path: "favorite", element: <Favorite />},
}