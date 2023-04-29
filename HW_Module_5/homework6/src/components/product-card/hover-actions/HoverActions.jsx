import {useCallback, useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import s from "./HoverActions.module.scss"
import * as Icon from "@ant-design/icons";
import {ContextStore} from "../../../context";

const HoverActions = ({data, cardHover}) => {
  const {cart, favorite, postFavorite, deleteFavorite, addData, openFirstModal} = useContext(ContextStore)
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

  const addFavorite =  (item) => {
    postFavorite({...item, isFilled: !isFilled})
    setIsFilled(true)
  }

  const removeFavorite = (id) => {
    deleteFavorite(id)
    setIsFilled(false)
  }

  const setModalData = (data) => {
    addData(data)
    openFirstModal()
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

          {!isChecked && <Icon.ShoppingCartOutlined className={s.actionCart} onClick={() => setModalData(data)}/>}

          {isChecked && <Link to={"/cart"}><Icon.CheckCircleFilled className={s.actionCart}/></Link>}

          {!isFilled && <Icon.HeartOutlined className={s.actionHeart} onClick={() => addFavorite(data)}/>}

          {isFilled && <Icon.HeartFilled className={s.actionHeart} onClick={() => removeFavorite(data.id)}/>}
        </div>
      }
    </>
  )
}

export default HoverActions
