import React from "react";
import s from "./Favorite.module.scss"
import PropTypes from "prop-types";

const Favorite = ({favorite, deleteProductInFavorite}) => {

        return (
            <>
                {!!favorite &&
                    <ul>
                        {favorite.map((item) => {
                            return (
                                <li key={item.id} className={s.favoriteProduct}
                                    onClick={() => deleteProductInFavorite(item)}>
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                }
                {favorite.length === 0 &&
                    <p>No Items</p>
                }
            </>
        )
}

Favorite.propTypes = {
    favorite: PropTypes.array,
    deleteProductInFavorite: PropTypes.func,
}
export default Favorite