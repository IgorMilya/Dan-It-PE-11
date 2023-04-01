import {Component} from "react";
import s from "./Favorite.module.scss"
import PropTypes from "prop-types";

class Favorite extends Component {

    render() {
        const {favorite, deleteProductInFavorite} = this.props
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

}

Favorite.propTypes = {
    favorite: PropTypes.array.isRequired,
    deleteProductInFavorite: PropTypes.func.isRequired,
}
export default Favorite