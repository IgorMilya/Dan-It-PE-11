import {Component} from "react";
import s from "./Cart.module.scss"
import PropTypes from "prop-types";

class Cart extends Component {

    render() {
        const {cart, deleteProductInCart} = this.props
        return (
            <>
                {!!cart &&
                    <ul>
                        {cart.map((item) => {
                            return (
                                <li key={item.id} className={s.cartProduct} onClick={() => deleteProductInCart(item)}>
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                }
                {cart.length === 0 &&
                    <p>No Items</p>
                }
            </>
        )
    }

}


Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    deleteProductInCart: PropTypes.func.isRequired,
}
export default Cart