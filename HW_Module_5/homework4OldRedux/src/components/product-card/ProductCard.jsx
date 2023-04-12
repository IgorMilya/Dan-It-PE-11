import React, {useEffect, useRef, useState} from "react";
import HoverActions from "./hover-actions";
import s from "./ProductCard.module.scss"
import PropTypes from "prop-types";

const ProductCard = ({data}) => {
  const [cardHover, setCardHover] = useState(false);
  const cardRef = useRef()

  const {images, price, title, rating} = data

  useEffect(() => {
    const element = cardRef.current
    if (element) {
      element.addEventListener("mouseenter", () => setCardHover(true));
      element.addEventListener("mouseleave", () => setCardHover(false));
    }
  }, [])

  return (
    <li className={s.productCard} ref={cardRef}>
      <div className={s.productCardBgImg}>
        <div className={s.productCardImg}>
          <img src={images[0]} alt="product"/>
        </div>
        <HoverActions
          data={data}
          cardHover={cardHover}
        />
      </div>

      <div className={s.textContent}>
        <h1 className={s.productCardTitle}>{title}</h1>
        <p className={s.productCardPrice}>Price: ${(price - price / 10).toFixed(0)}
          <span className={s.oldPrice}> ${price} </span>
        </p>
        <p className={s.productCardRating}>Rating: {rating}</p>
      </div>
    </li>
  )
}

export default ProductCard

ProductCard.prototype = {
  data: PropTypes.object.isRequired
}