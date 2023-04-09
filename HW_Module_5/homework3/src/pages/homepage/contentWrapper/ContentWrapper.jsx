import React, {useCallback, useEffect, useState} from "react";
import {request} from "../../../tools/request";
import {Outlet} from "react-router-dom";
import Navbar from "../../../components/navbar";
import Modal from "../../../UI/modal";
import Button from "../../../UI/button";
import s from "./ContentWrapper.module.scss";
import {Layout as AntdLayout} from "antd";

const {Header: AntdHeader, Content: AntdContent} = AntdLayout;

const ContentWrapper = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
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

  useEffect(() => {
    isSecondOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isSecondOpened])

  const addProduct = useCallback(({item, isFilled, storage, setStateProduct, setOpened}) => {
    const storageArray = JSON.parse(localStorage.getItem(`${storage}`)) || [];
    isFilled ? storageArray.push({...item, isFilled}) : storageArray.push({...item, isChecked: true})
    localStorage.setItem(`${storage}`, JSON.stringify(storageArray));

    setStateProduct(prevState => [...prevState, item])
    !!setOpened && setOpened(false)
  }, [favorite, cart])

  const removeAllProducts = useCallback(({item, storage, data, setStateProduct, setOpened}) => {
    const storageArray = JSON.parse(localStorage.getItem(`${storage}`)) || [];
    const newStorage = storageArray.filter(el => el.id !== item.id)
    const newState = [...data].filter(el => el.id !== item.id)

    setStateProduct(newState)
    !!setOpened && setOpened(false)
    localStorage.setItem(`${storage}`, JSON.stringify(newStorage));
  }, [favorite, cart])

  const setModalData = (data) => {
    setCardData(data)
    setFirstIsOpened(true)
  }

  const setSecondModalData = (data) => {
    setCardData(data)
    setSecondIsOpened(true)
  }


  const actionsAddToCart = (<>
    <Button
      backgroundColor={"darkred"}
      text={"Ok"}
      onClick={() => {
        addProduct(
          {
            item: cardData,
            setStateProduct: setCart,
            setOpened: setFirstIsOpened,
            storage: 'cartProducts',
          })

      }}
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
      onClick={() =>
        removeAllProducts({
          data: cart,
          item: cardData,
          setStateProduct: setCart,
          setOpened: setSecondIsOpened,
          storage: 'cartProducts',
        })}
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
    <AntdLayout style={{minHeight: "100vh"}}>
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
              products, cartProducts, favoriteProducts, setFavorite, favorite, cart,
              addProduct, removeAllProducts, setModalData, setSecondModalData, setCart
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