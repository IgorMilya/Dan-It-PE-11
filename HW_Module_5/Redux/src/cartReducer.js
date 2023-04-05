const defaultState = {
    // goodId: amount
};

export function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const { goodId } = action.payload;
            const amount = state[goodId] || 0;
            return {
                ...state,
                [goodId]: amount + 1,
            }
        case "REMOVE_FROM_CART":
            const { [action.payload.goodId]: _, ...rest } = state;
            return rest;
        default:
            return state;
    }
}
