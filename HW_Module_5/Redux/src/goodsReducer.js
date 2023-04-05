const defaultState = {
    1: {
        id: 1,
        name: 'Чайник',
        price: 100
    },
    2: {
        id: 2,
        name: 'Холодильник',
        price: 2000
    },
    3: {
        id: 3,
        name: 'Пралка',
        price: 1500
    },
    4: {
        id: 4,
        name: 'ТВ',
        price: 1000
    },
    5: {
        id: 5,
        name: 'Телефон',
        price: 800
    }
}

export function goodsReducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}