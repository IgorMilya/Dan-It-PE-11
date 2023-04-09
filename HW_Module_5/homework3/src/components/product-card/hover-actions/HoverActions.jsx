import React, {useEffect, useState} from "react";
import {Link, useOutletContext} from "react-router-dom";
import s from "./HoverActions.module.scss"
import {CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const HoverActions = ({data, cardHover}) => {
  const [isFilled, serIsFilled] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [{addProduct, removeAllProducts, setModalData, setFavorite, favorite, cart}] = useOutletContext()

  const savedProducts = (storagePlace, setValue) => {
    const products = localStorage.getItem(`${storagePlace}`);
    if (!products) return
    const storage = JSON.parse(products);

    storage.forEach(item => {
      const {id, isFilled, isChecked} = item

      if (id !== data.id) return
      setValue(isFilled || isChecked)
    })
  }

  useEffect(() => {
    savedProducts("cartProducts", setIsChecked)
  }, [cart])

  useEffect(() => {
    savedProducts("favoriteProducts", serIsFilled)
  }, [favorite])

  const addFavorite = () => {
    addProduct({
      item: data,
      setStateProduct: setFavorite,
      storage: 'favoriteProducts',
      isFilled: !isFilled
    })
    serIsFilled(true)
  }

  const removeFavorite = () => {
    removeAllProducts({
      data: favorite,
      item: data,
      setStateProduct: setFavorite,
      storage: 'favoriteProducts'
    })
    serIsFilled(false)
  }

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