import {Component} from "react";
import s from "./ProductCard.module.scss"
import Actions from "./actions/Actions";


class ProductCard extends Component {
    constructor(props) {
        super(props);

    }


    renderCard() {
        const {category, products, addProductInCart} = this.props;

        return products.map((item) => {
            const {id, image, price, title, rating: {rate}} = item
            if (item.category === category) {
                return (
                    <div key={id} className={s.productCard}>
                        <div className={s.productCardBgImg}>
                            <div className={s.productCardImg}>
                                <img src={image} alt="product"/>
                            </div>
                            <Actions item={item} addProductInCart={addProductInCart}/>

                        </div>
                        <div className={s.textContent}>
                            <h1 className={s.productCardTitle}>{title}</h1>
                            <span className={s.productCardPrice}>Price: {price} $</span>
                            <p className={s.productCardRating}>Rating: {rate}</p>
                        </div>
                    </div>
                )
            }

        })
    }

    render() {
        return (
            <>
                {this.renderCard()}
            </>
        )
    }
}

export default ProductCard