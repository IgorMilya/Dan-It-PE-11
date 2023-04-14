import React, { useEffect, useState} from "react";
import {request} from "../../../tools/request";
import {Outlet} from "react-router-dom";
import Navbar from "../../../components/navbar";
import ModalWrapper from "../../../components/modal-wrapper/ModalWrapper";
import s from "./ContentWrapper.module.scss";
import {Layout as AntdLayout} from "antd";

const {Header: AntdHeader, Content: AntdContent} = AntdLayout;

const ContentWrapper = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartProducts')) || [])
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favoriteProducts')) || [])
  const [cardData, setCardData] = useState({})
  const [isFirstOpened, setFirstIsOpened] = useState(false)
  const [isSecondOpened, setSecondIsOpened] = useState(false)

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

  useEffect(() => {
    window.localStorage.setItem("cartProducts", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    window.localStorage.setItem("favoriteProducts", JSON.stringify(favorite))
  }, [favorite])

  const addProduct =({item, isFilled, setStateProduct, setOpened}) => {
    isFilled ? setStateProduct(prevState => [...prevState, {...item, isFilled}])
      : setStateProduct(prevState => [...prevState, {...item, isChecked: true}])
    !!setOpened && setOpened(false)
  }

  const removeAllProducts = ({item, data, setStateProduct, setOpened}) => {
    const newState = [...data].filter(el => el.id !== item.id)
    setStateProduct(newState)
    !!setOpened && setOpened(false)
  }

  const setModalData = (data) => {
    setCardData(data)
    setFirstIsOpened(true)
  }

  const setSecondModalData = (data) => {
    setCardData(data)
    setSecondIsOpened(true)
  }


  return (
    <AntdLayout style={{minHeight: "100vh"}}>
      <AntdHeader className={s.header}>
        <Navbar
          favorite={favorite}
          cart={cart}
        />
      </AntdHeader>

      <AntdContent>
        <Outlet
          context={
            [{
              products, setFavorite, favorite, cart, isFirstOpened, isSecondOpened,
              addProduct, removeAllProducts, setModalData, setSecondModalData, setCart,
              setSecondIsOpened, setFirstIsOpened, cardData
            }]}
        />
      </AntdContent>
      <ModalWrapper
        cart={cart}
        setCart={setCart}
        cardData={cardData}
        addProduct={addProduct}
        isFirstOpened={isFirstOpened}
        isSecondOpened={isSecondOpened}
        setFirstIsOpened={setFirstIsOpened}
        setSecondIsOpened={setSecondIsOpened}
        removeAllProducts={removeAllProducts}
        />
    </AntdLayout>)
}


export default ContentWrapper