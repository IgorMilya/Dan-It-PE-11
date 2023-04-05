import React, {useEffect, useState} from "react";
import s from "./Actions.module.scss"
import {HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {useOutletContext} from "react-router-dom";

const Actions = ({data, cardHover}) => {
    const [isFilled, serIsFilled] = useState(false)
    const [{addProductInFavorite, deleteProductInFavorite, setModalData}] = useOutletContext()

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
