import React, {useCallback, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Layout as AntdLayout} from "antd";
import s from "./ContentWrapper.module.scss";
import Navbar from "../../../components/navbar";
import Modal from "../../../UI/modal";
import {request} from "../../../tools/request";
import Button from "../../../UI/button";


const {Header: AntdHeader, Content: AntdContent} = AntdLayout;
const ContentWrapper = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [favorite, setFavorite] = useState([])
    const [cardData, setCardData] = useState({})
    const [isOpened, setIsOpened] = useState(false)
    // const [isShowedCart, setIsShowedCart] = useState(false)
    // const [isShowedFavorite, setIsShowedFavorite] = useState(false)

    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

    const getProducts = async () => {
        const {res} = await request({url: "/"})
        setProducts(res.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        isOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    }, [isOpened])


    const addProductInCart = useCallback((item) => {
        setCart(prevState => [...prevState, item])
        setIsOpened(false)
        addLocalProduct(item, 'cartProducts')
    }, [cart])

    const addProductInFavorite = useCallback((item, isFilled) => {
        setFavorite(prevState => [...prevState, item])
        addLocalProduct(item, 'favoriteProducts', isFilled)
    }, [favorite])

    const addLocalProduct = (item, storage, isFilled) => {
        const storageArray = JSON.parse(localStorage.getItem(`${storage}`)) || [];
        isFilled ? storageArray.push({...item, isFilled}) : storageArray.push(item)
        localStorage.setItem(`${storage}`, JSON.stringify(storageArray));
    }


    const deleteProductInCart = useCallback((item) => {
        const newCart = [...cart].filter(el => el.id !== item.id)
        setCart(newCart)
        deleteLocalProduct(item, 'cartProducts')
    }, [cart])

    const deleteProductInFavorite = useCallback((item) => {
        const newFavorite = [...favorite].filter(el => el.id !== item.id)
        setFavorite(newFavorite)
        deleteLocalProduct(item, 'favoriteProducts')
    }, [favorite])

    const deleteLocalProduct = (item, storage) => {
        const storageArray = JSON.parse(localStorage.getItem(`${storage}`)) || [];
        const newStorage = storageArray.filter(el => el.id !== item.id)
        localStorage.setItem(`${storage}`, JSON.stringify(newStorage));
    }


    // const setIsShowed = (cart, favorite) => {
    //     setIsShowedCart(cart)
    //     setIsShowedFavorite(favorite)
    // }

    const setModalData = useCallback((data) => {
        setCardData(data)
        setIsOpened(true)
    }, [cardData])

    const actionsAddToCart = (<>
        <Button
            backgroundColor={"darkred"}
            text={"Ok"}
            onClick={() => addProductInCart(cardData)}
            className={'modal-button'}
        />
        <Button
            backgroundColor={"darkred"}
            text={"Cancel"}
            onClick={() => setIsOpened(false)}
            className={'modal-button'}
        />
    </>)

    return (
        <AntdLayout>
            <AntdHeader className={s.header}>
                <Navbar
                    // setIsShowed={setIsShowed}
                    favoriteProducts={favoriteProducts}
                    cartProducts={cartProducts}
                />
            </AntdHeader>

            <AntdContent>
                <Outlet
                    context={
                    [products, addProductInFavorite, deleteProductInFavorite,
                        setModalData, deleteProductInCart, cartProducts, favoriteProducts]}
                />
            </AntdContent>

            <Modal
                isOpened={isOpened}
                backgroundModal={'firstModal'}
                backgroundHeader={'firstHeader'}
                header={'Do u wanna add this product?'}
                subText={'Are you sure you wanna add it?'}
                closeButton={() => setIsOpened(false)}
                actions={actionsAddToCart}
            />
        </AntdLayout>)
}


export default ContentWrapper