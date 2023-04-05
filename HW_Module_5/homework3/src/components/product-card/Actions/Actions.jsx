import React, {useEffect, useState} from "react";
import s from "./Actions.module.scss"
import {HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const Actions = (props) => {
    const [isFilled, serIsFilled] = useState(false)

    const {data, addProductInFavorite, deleteProductInFavorite, setModalData, cardHover} = props;

    useEffect(() => {
        const favoriteProducts = localStorage.getItem('favoriteProducts');

        if (!favoriteProducts) return
        const productsStorage = JSON.parse(favoriteProducts);

        productsStorage.forEach(item => {
            const {id, isFilled} = item
            if (id !== data.id) return
            serIsFilled(isFilled)
        })
    }, [])

    useEffect(() => {
        isFilled ? addProductInFavorite(data, isFilled) : deleteProductInFavorite(data)
    }, [isFilled])

    return (
        <>
            {!!cardHover &&
                <div className={s.action}>
                    <ShoppingCartOutlined className={s.actionCart} onClick={() => setModalData(data)}/>

                    {!isFilled && <HeartOutlined className={s.actionHeart} onClick={() => serIsFilled(true)}/>}

                    {isFilled && <HeartFilled className={s.actionHeart} onClick={() => serIsFilled(false)}/>}
                </div>
            }
        </>

    )
}
export default Actions

Actions.propTypes = {
    data: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired,
    addProductInFavorite: PropTypes.func.isRequired,
    deleteProductInFavorite: PropTypes.func.isRequired,
    cardHover: PropTypes.bool.isRequired
}