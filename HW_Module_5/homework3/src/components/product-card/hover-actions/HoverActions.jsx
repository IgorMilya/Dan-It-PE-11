import React, {useCallback, useEffect, useState} from "react";
import {Link, useOutletContext} from "react-router-dom";
import s from "./HoverActions.module.scss"
import {CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const HoverActions = ({data, cardHover}) => {
  const [isFilled, serIsFilled] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [{addProduct, removeAllProducts, setModalData, setFavorite, favorite, cart}] = useOutletContext()

  const savedProducts = useCallback((storage, setValue) => {
    if (!storage) return
    storage.forEach(item => {
      const {id, isFilled, isChecked} = item
      if (id !== data.id) return
      setValue(isFilled || isChecked)
    })
  }, [data.id])

  const addFavorite = () => {
    addProduct({
      item: data,
      setStateProduct: setFavorite,
      isFilled: !isFilled
    })
    serIsFilled(true)
  }

  const removeFavorite = () => {
    removeAllProducts({
      data: favorite,
      item: data,
      setStateProduct: setFavorite,
    })
    serIsFilled(false)
  }

  useEffect(() => {
    savedProducts(cart, setIsChecked)
  }, [savedProducts, cart])

  useEffect(() => {
    savedProducts(favorite, serIsFilled)
  }, [savedProducts, favorite])

  return (
    <>
      {!!cardHover &&
        <div className={s.action}>

          {!isChecked && <ShoppingCartOutlined className={s.actionCart} onClick={() => setModalData(data)}/>}

          {isChecked &&
            <Link to={"/cart"}>
              <CheckCircleFilled className={s.actionCart}/>
            </Link>}

          {!isFilled && <HeartOutlined className={s.actionHeart} onClick={() => addFavorite()}/>}

          {isFilled && <HeartFilled className={s.actionHeart} onClick={() => removeFavorite()}/>}
        </div>
      }
    </>
  )
}

export default HoverActions

HoverActions.prototype = {
  cart: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  favorite: PropTypes.array.isRequired,
  cardHover: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
  removeAllProducts: PropTypes.func.isRequired,
}