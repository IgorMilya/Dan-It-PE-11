import React, {useEffect} from "react";
import useMetaData from "../../../hooks/useMetaData";
import {asyncProducts} from "../../../redux/reducers/product.slice/asyncProduct";
import {Outlet} from "react-router-dom";
import Navbar from "../../../components/navbar";
import ModalWrapper from "../../../components/modalWeapper/ModalWrapper";
import s from "./ContentWrapper.module.scss";
import {Layout as AntdLayout} from "antd";

const {Header: AntdHeader, Content: AntdContent} = AntdLayout;

const ContentWrapper = () => {
  const {cart, isFirstOpened, isSecondOpened, favorite,dispatch} = useMetaData()

  useEffect(() => {
    dispatch(asyncProducts())
  }, [dispatch])

  useEffect(() => {
    window.localStorage.setItem("cartProducts", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    window.localStorage.setItem("favoriteProducts", JSON.stringify(favorite))
  }, [favorite])

  useEffect(() => {
    isFirstOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isFirstOpened])

  useEffect(() => {
    isSecondOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isSecondOpened])

  return (
    <AntdLayout style={{minHeight: "100vh"}}>
      <AntdHeader className={s.header}>
        <Navbar/>
      </AntdHeader>

      <AntdContent>
        <Outlet/>
      </AntdContent>

      <ModalWrapper/>

    </AntdLayout>)
}

export default ContentWrapper