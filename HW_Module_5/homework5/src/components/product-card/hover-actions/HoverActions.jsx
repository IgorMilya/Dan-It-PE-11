import React, {useCallback, useEffect, useState} from "react";
import useMetaData from "../../../hooks/useMetaData";
import {addData} from "../../../redux/reducers/cardData.slice/cardData.slice";
import {openFirstModal} from "../../../redux/reducers/firstOpened.slice/firstOpened.slice";
import {addFavoriteProduct, removeFavoriteProduct} from "../../../redux/reducers/favorite.slice/favorite.slice";
import {Link} from "react-router-dom";
import s from "./HoverActions.module.scss"
import {CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";

const HoverActions = ({data, cardHover}) => {
  const {cart, favorite, dispatch} = useMetaData()
  const [isFilled, setIsFilled] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const savedProducts = useCallback((storage, setValue) => {
    if (!storage) return
    storage.forEach(item => {
      const {id, isFilled, isChecked} = item
      if (id !== data.id) return
      setValue(isFilled || isChecked)
    })
  },[data.id])

  const addFavorite = (item) => {
    dispatch(addFavoriteProduct({...item, isFilled: !isFilled}))
    setIsFilled(true)
  }

  const removeFavorite = (id) => {
    dispatch(removeFavoriteProduct({id}))
    setIsFilled(false)
  }

  const setModalData = (data) => {
    dispatch(addData({data}))
    dispatch(openFirstModal())
  }

  useEffect(() => {
    savedProducts(cart, setIsChecked)
  }, [savedProducts, cart])

  useEffect(() => {
    savedProducts(favorite, setIsFilled)
  }, [savedProducts, favorite])

  return (
    <>
      {!!cardHover &&
        <div className={s.action}>

          {!isChecked && <ShoppingCartOutlined className={s.actionCart} onClick={() => setModalData(data)}/>}

          {isChecked && <Link to={"/cart"}><CheckCircleFilled className={s.actionCart}/></Link>}

          {!isFilled && <HeartOutlined className={s.actionHeart} onClick={() => addFavorite(data)}/>}

          {isFilled && <HeartFilled className={s.actionHeart} onClick={() => removeFavorite(data.id)}/>}
        </div>
      }
    </>
  )
}

export default HoverActions
