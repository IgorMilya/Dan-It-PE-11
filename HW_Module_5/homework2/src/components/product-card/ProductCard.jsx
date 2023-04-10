import {Component} from "react";
import s from "./ProductCard.module.scss"
import {HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilled: false,
            isOpened: false
        }
    }

    componentDidMount() {
        const {data} = this.props;
        const favoriteProducts = localStorage.getItem('favoriteProducts');

        if (!favoriteProducts) return
        const productsStorage = JSON.parse(favoriteProducts);

        productsStorage.forEach(item => {
            if (item.id !== data.id) return
            const {isFilled} = item
            this.setState({isFilled});
        })
    }

    setFilled() {
        const {isFilled} = this.state;
        const {data, addProductInFavorite, deleteProductInFavorite} = this.props;
        this.setState({isFilled: !isFilled})

        !isFilled ? addProductInFavorite(data, !isFilled) : deleteProductInFavorite(data)
    }

    render() {
        const {data, setModalData} = this.props;
        const {isFilled} = this.state;
        const {image, price, title, rating: {rate}} = data

        return (
            <li className={s.productCard}>
                <div className={s.productCardBgImg}>
                    <div className={s.productCardImg}>
                        <img src={image} alt="product"/>
                    </div>

                    <div className={s.action}>
                        <ShoppingCartOutlined className={s.actionCart} onClick={() => setModalData(data)}/>

                        {!isFilled && <HeartOutlined className={s.actionHeart} onClick={() => this.setFilled()}/>}

                        {isFilled && <HeartFilled className={s.actionHeart} onClick={() => this.setFilled()}/>}
                    </div>
                </div>

                <div className={s.textContent}>
                    <h1 className={s.productCardTitle}>{title}</h1>
                    <p className={s.productCardPrice}>Price: ${(price - price / 10).toFixed(2)}
                        <span className={s.oldPrice}> ${price} </span>
                    </p>
                    <p className={s.productCardRating}>Rating: {rate}</p>
                </div>
            </li>
        )
    }
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired,
    addProductInFavorite: PropTypes.func.isRequired,
    deleteProductInFavorite: PropTypes.func.isRequired
}


export default ProductCard