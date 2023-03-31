import {Component} from "react";
import s from "./ProductCard.module.scss"
import Actions from "./actions/Actions";
import Modal from "../../UI/modal";
import Button from "../../UI/button";


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }

    setIsModal() {
        this.setState({isOpened: true})
    }

    resetIsModal() {
        this.setState({isOpened: false})
    }

    renderCard() {
        const {category, products, addProductInCart, addProductInFavorite, deleteProductInFavorite} = this.props;
        const {isOpened} = this.state;

        return products.map((data) => {


            const actions = (
                <>
                    <Button
                        backgroundColor={"darkred"}
                        text={"Ok"}
                        onClick={() => {
                            addProductInCart(data)
                            this.resetIsModal()
                        }}
                        className={'modal-button'}
                    />
                    <Button
                        backgroundColor={"darkred"}
                        text={"Cancel"}
                        onClick={() => this.resetIsModal()}
                        className={'modal-button'}
                    />
                </>
            )

            if (data.category === category) {
                const {id, image, price, title, rating: {rate}} = data

                return (
                    <>
                        <div key={id} className={s.productCard}>
                            <div className={s.productCardBgImg}>
                                <div className={s.productCardImg}>
                                    <img src={image} alt="product"/>
                                </div>
                                <Actions data={data} addProductInCart={addProductInCart}
                                         addProductInFavorite={addProductInFavorite}
                                         deleteProductInFavorite={deleteProductInFavorite}
                                         setIsModal={() => this.setIsModal()}
                                />

                            </div>
                            <div className={s.textContent}>
                                <h1 className={s.productCardTitle}>{title}</h1>
                                <span className={s.productCardPrice}>Price: ${(price - price / 10).toFixed(2)}
                                    <span className={s.oldPrice}> ${price} </span>
                                </span>
                                <p className={s.productCardRating}>Rating: {rate}</p>
                            </div>
                        </div>
                        <Modal
                            isOpened={isOpened}
                            backgroundModal={'firstModal'}
                            backgroundHeader={'firstHeader'}
                            header={'Do u wanna add this product?'}
                            subText={'Are you sure you wanna add it?'}
                            closeButton={() => this.resetIsModal()}
                            actions={actions}
                        />
                    </>
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