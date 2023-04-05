import React from "react";
import s from "./Favorite.module.scss"
import PropTypes from "prop-types";
import {useOutletContext} from "react-router-dom";

const Favorite = () => {
    const [{favoriteProducts, deleteProductInFavorite}] = useOutletContext()

        return (
            <>
                {!!favoriteProducts &&
                    <ul>
                        {favoriteProducts.map((item) => {
                            return (
                                <li key={item.id} className={s.favoriteProduct}
                                    onClick={() => deleteProductInFavorite(item)}>
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                }
                {favoriteProducts.length === 0 &&
                    <p>No Items</p>
                }
            </>
        )
}


export default Favorite