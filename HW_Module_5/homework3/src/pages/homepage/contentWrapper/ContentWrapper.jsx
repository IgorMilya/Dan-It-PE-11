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
    const [isFirstOpened, setFirstIsOpened] = useState(false)
    const [isSecondOpened, setSecondIsOpened] = useState(false)

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
        isFirstOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    }, [isFirstOpened])


    const addProductInCart = useCallback((item) => {
        setCart(prevState => [...prevState, item])
        setFirstIsOpened(false)
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
        setSecondIsOpened(false)

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

    const setModalData = useCallback((data) => {
        setCardData(data)
        setFirstIsOpened(true)
    }, [cardData])

    const setSecondModalData = useCallback((data) => {
        setCardData(data)
        setSecondIsOpened(true)
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
            onClick={() => setFirstIsOpened(false)}
            className={'modal-button'}
        />
    </>)

    const actionsRemoveFromCart = (<>
        <Button
            backgroundColor={"darkblue"}
            text={"Ok"}
            onClick={() => deleteProductInCart(cardData)}
            className={'modal-button'}
        />
        <Button
            backgroundColor={"darkblue"}
            text={"Cancel"}
            onClick={() => setSecondIsOpened(false)}
            className={'modal-button'}
        />
    </>)

    return (
        <AntdLayout>
            <AntdHeader className={s.header}>
                <Navbar
                    favoriteProducts={favoriteProducts}
                    cartProducts={cartProducts}
                />
            </AntdHeader>

            <AntdContent>
                <Outlet
                    context={
                        [{
                            products, addProductInFavorite, deleteProductInFavorite,
                            setModalData, cartProducts, favoriteProducts, setSecondModalData
                        }]}
                />

            </AntdContent>

            <Modal
                isOpened={isFirstOpened}
                backgroundModal={'firstModal'}
                backgroundHeader={'firstHeader'}
                header={'Do u wanna add this product?'}
                subText={'Are you sure you wanna add it?'}
                closeButton={() => setFirstIsOpened(false)}
                actions={actionsAddToCart}
            />

            <Modal
                isOpened={isSecondOpened}
                backgroundModal={'secondModal'}
                backgroundHeader={'secondHeader'}
                header={'Do u wanna delete this product?'}
                subText={'Are you sure you wanna delete it?'}
                closeButton={() => setSecondIsOpened(false)}
                actions={actionsRemoveFromCart}
            />
        </AntdLayout>)
}


export default ContentWrapper