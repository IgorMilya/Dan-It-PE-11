import {Component} from "react";
import {ShoppingCartOutlined, HeartOutlined, HeartFilled} from "@ant-design/icons";
import s from "../ProductCard.module.scss"


class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilled: false
        }
    }

    setFilled() {
        this.setState({isFilled: !this.state.isFilled})
    }

    render() {
        const {isFilled} = this.state;
        const {item, addProductInCart } = this.props;
        return (
            <div className={s.action}>
                <ShoppingCartOutlined className={s.actionCart} onClick={() => addProductInCart(item)}/>
                {!isFilled && <HeartOutlined className={s.actionHeart} onClick={() => this.setFilled()}/>}
                {isFilled && <HeartFilled className={s.actionHeart} onClick={() => this.setFilled()}/>}
            </div>
        )
    }

}

export default Actions