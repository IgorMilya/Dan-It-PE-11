import {Component} from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {cart} = this.props
        return (
            <>
                {!!cart &&
                    <ul>
                    {cart.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
                }
                {!cart &&
                <p>No Items</p>
                }

            </>
        )
    }

}

export default Cart