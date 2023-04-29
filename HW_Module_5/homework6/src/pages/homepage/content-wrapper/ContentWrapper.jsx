import {useContext, useEffect} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../../../components/navbar";
import ModalWrapper from "../../../components/modal-wrapper/ModalWrapper";
import s from "./ContentWrapper.module.scss";
import {Layout as AntdLayout} from "antd";
import {ContextStore} from "../../../context";

const {Header: AntdHeader, Content: AntdContent} = AntdLayout;

const ContentWrapper = () => {
  const {cart, isFirstOpened, isSecondOpened, getProducts} = useContext(ContextStore)

  useEffect(() => {
    window.localStorage.setItem("cartProducts", JSON.stringify(cart))
    console.log(cart)
  }, [cart])

  useEffect(() => {
    isFirstOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isFirstOpened])

  useEffect(() => {
    isSecondOpened ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [isSecondOpened])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <AntdLayout style={{minHeight: "100vh"}}>
      <AntdHeader className={s.header}>
        <Navbar />
      </AntdHeader>

      <AntdContent>
        <Outlet/>
      </AntdContent>

      <ModalWrapper/>

    </AntdLayout>
  )
}

export default ContentWrapper