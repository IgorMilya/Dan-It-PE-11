import React, {useEffect, useState} from "react";
import useMetaData from "../../../hooks/useMetaData";
import {useDispatch} from "react-redux";
import {addData, addFavoriteProduct, openFirstModal, removeFavoriteProduct,} from "../../../redux/actions";
import {Link} from "react-router-dom";
import s from "./HoverActions.module.scss"
import {CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const HoverActions = ({data, cardHover}) => {
  const dispatch = useDispatch();
  const {cart, favorite} = useMetaData()
  const [isFilled, setIsFilled] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const savedProducts = (storage, setValue) => {
    if (!storage) return
    storage.forEach(item => {
      const {id, isFilled, isChecked} = item
      if (id !== data.id) return
      setValue(isFilled || isChecked)
    })
  }

  const addFavorite = (item) => {
    dispatch(addFavoriteProduct({...item, isFilled: !isFilled}))
    setIsFilled(true)
  }

  const removeFavorite = (id) => {
    dispatch(removeFavoriteProduct(id))
    setIsFilled(false)
  }

  const setModalData = (data) => {
    dispatch(addData(data))
    dispatch(openFirstModal())
  }

  useEffect(() => {
    savedProducts(cart,  setIsChecked)
  }, [savedProducts])

  useEffect(() => {
    savedProducts(favorite, setIsFilled)
  }, [savedProducts])

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