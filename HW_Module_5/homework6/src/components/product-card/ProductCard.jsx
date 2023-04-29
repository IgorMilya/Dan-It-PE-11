import {useContext, useEffect, useRef, useState} from "react";
import HoverActions from "./hover-actions";
import s from "./ProductCard.module.scss"
import PropTypes from "prop-types";
import {ContextStore} from "../../context";
import cn from "classnames";
import { Rate as AntRate } from 'antd';

const ProductCard = ({data}) => {
  const {table} = useContext(ContextStore)
  const [cardHover, setCardHover] = useState(false);
  const cardRef = useRef()

  const {images, price, title, rating, description, discountPercentage} = data

  useEffect(() => {
    const element = cardRef.current
    if (element) {
      element.addEventListener("mouseenter", () => setCardHover(true));
      element.addEventListener("mouseleave", () => setCardHover(false));
    }
  }, [])

  return (
    <li className={table ? s.productCard : s.productCardList} >
      <div className={table ? s.productCardBgImg : cn(s.productCardBgImg, s.listImg)} ref={cardRef}>
        <div className={s.productCardImg}>
          <img src={images[0]} alt="product"/>
        </div>
        <HoverActions
          data={data}
          cardHover={cardHover}
        />
        <AntRate className={s.rate} allowHalf disabled defaultValue={rating} />
      </div>
      <div className={table ? s.textContent : s.listContent}>
        <h1 className={table ? s.productCardTitle : s.listProductText}> {!table && <span style={{color: "#151875"}}>Article:</span>} {title}</h1>
        <p className={table ? s.productCardPrice : s.listProductPrice}>Price: ${(price - price / discountPercentage).toFixed(0)}
          <span className={s.oldPrice}> ${price} </span>
        </p>
        {!table && <p className={s.listDescription}><span style={{fontWeight: 700}}>Description:</span> {description}</p>}
      </div>
    </li>
  )
}

export default ProductCard

ProductCard.prototype = {
  data: PropTypes.object.isRequired
}