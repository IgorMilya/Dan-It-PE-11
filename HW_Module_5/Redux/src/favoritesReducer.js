const defaultState = [];

export function favoritesReducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return state.includes(action.payload.goodId) ? state : [...state, action.payload.goodId];
        case "REMOVE_FROM_FAVORITES":
            return state.filter(goodId => goodId !== action.payload.goodId)
        default:
            return state;
    }
}