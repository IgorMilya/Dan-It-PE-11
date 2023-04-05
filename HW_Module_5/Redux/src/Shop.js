import { useDispatch, useSelector } from "react-redux";


const selectFavoriteGoods = store => {
    return store.favorites.map(favId => store.goods[favId]);

    // return store.goods.filter(good => store.favorites.includes(good.id));
}

const selectCartGoods = store => {
    // {1: 1}
    // [[1, 1]]
    return Object.entries(store.cart).map(([goodId, amount]) => {
        const good = store.goods[goodId];
        return {
            amount,
            id: goodId,
            name: good.name
        }
    })
}

const selectGoods = store => Object.values(store.goods);

const removeFromFavorites = (goodId) => ({
    type: "REMOVE_FROM_FAVORITES",
    payload: {
        goodId,
    }
})

// const getGoods = () => fetch().then(r = r.json())

// const getGoodsThunk = (goodId) => {
//     return (dispatch, getState) => {
//         dispatch({ type: "Start_loading" })
//         getGoods().then(goods => {
//             dispatch({ type: 'GET_GOODS', payload: { goods } })
//             dispatch({ type: "STOP_LOADING" })
//         }).catch((err) => {
//             console.err(err);
//             dispatch({ type: "SHOW_NOTIFICATION" })
//         })
//     }
// }


// thunk, redux-saga, rxjs


export function Shop() {
    const cart = useSelector(selectCartGoods);
    const goods = useSelector(selectGoods)
    const favorites = useSelector(selectFavoriteGoods);
    const dispatch = useDispatch();

    const onAddToFavoritesClick = (good) => dispatch({
        type: "ADD_TO_FAVORITES",
        payload: {
            goodId: good.id,
        }
    });
    const onRemoveFromFavoritesClick = (goodId) => dispatch(removeFromFavorites(goodId));

    const onRemoveFromCart = (goodId) => dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
            goodId
        }
    })
    const onAddToCart = (goodId) => dispatch({
        type: "ADD_TO_CART",
        payload: {
            goodId
        }
    })

    // useEffect(() => {
    //     dispatch(getGoods())
    // }, [dispatch])

    console.log(1, cart)

    return (
        <div>
            <div>
                <h5>favorites</h5>
                {favorites.map(favorite => (
                    <div key={favorite.id}>
                        <span>fav good name: {favorite.name}</span>
                        <button onClick={() => onRemoveFromFavoritesClick(favorite.id)}>remove from favorites</button>
                    </div>
                ))}
            </div>

            <div>
                <h5>cart</h5>
                {cart.map(good => (
                    <div key={good.id}>
                        <div>name: {good.name}</div>
                        <span>amount: {good.amount}</span>
                        <button onClick={() => onRemoveFromCart(good.id)}>remove good from cart</button>
                    </div>
                ))}
            </div>

            <h3>Shop Goods</h3>
            {goods.map(good => (
                <div key={good.id}>
                    <div>name: {good.name}</div>
                    <span>price: {good.price}</span>
                    <button onClick={() => onAddToFavoritesClick(good)}>add to favorites</button>
                    <button onClick={() => onAddToCart(good.id)}>add to cart</button>
                </div>
            ))}
        </div>
    )
}