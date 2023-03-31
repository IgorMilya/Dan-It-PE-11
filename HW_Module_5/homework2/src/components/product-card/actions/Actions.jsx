import {Component} from "react";
import {ShoppingCartOutlined, HeartOutlined, HeartFilled} from "@ant-design/icons";
import s from "../ProductCard.module.scss"
import Modal from "../../../UI/modal";
import Button from "../../../UI/button";


class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilled: false,
            isOpened: false
        }
    }

    setFilled() {
        this.setState({isFilled: !this.state.isFilled})
    }



    render() {
        const {isFilled} = this.state;
        const {data, addProductInFavorite, deleteProductInFavorite, setIsModal} = this.props;


        return (
            <>
                <div className={s.action}>
                    <ShoppingCartOutlined className={s.actionCart} onClick={setIsModal}/>

                    {!isFilled && <HeartOutlined className={s.actionHeart} onClick={() => {
                        this.setFilled()
                        addProductInFavorite(data)
                    }}/>}

                    {isFilled && <HeartFilled className={s.actionHeart} onClick={() => {
                        this.setFilled()
                        deleteProductInFavorite(data)
                    }}/>}

                </div>

            </>
        )
    }

}

export default Actions