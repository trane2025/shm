const SET_BASKET = 'SET_BASKET';
const ADD_PRODUCT_BASKET = 'ADD_PRODUCT_BASKET';
const CHANGE_COUNT_PORTION = 'CHANGE_COUNT_PORTION';
const TOGGlE_BASKET = 'TOGGlE_BASKET';
const CLEAR_BASKET = 'CLEAR_BASKET';

const initialState = {
    clouseBasket: true,
    products: {},
    countPrice: 0
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASKET:

            return {
                ...state,
                products: action.arr,
                countPrice: getAllPrice()
            }
        case ADD_PRODUCT_BASKET:

            return {
                ...state,
                products: action.arr,
                countPrice: getAllPrice()
            }
        case CHANGE_COUNT_PORTION:

            return {
                ...state,
                products: { ...state.products, [action.key]: { ...state.products[action.key], selectedPortion: action.value } },
                countPrice: getAllPrice()
            }
        case TOGGlE_BASKET:
            return {
                ...state,
                clouseBasket: action.value
            }
        case CLEAR_BASKET:
            return initialState

        default: return state;
    }
}

export default basket;

export const setBasket = (arr) => ({ type: SET_BASKET, arr });

export const addProductBasket = (arr) => ({ type: ADD_PRODUCT_BASKET, arr });

export const changeCountPortion = (key, value) => ({ type: CHANGE_COUNT_PORTION, key, value });

export const toggleBasket = (value) => ({ type: TOGGlE_BASKET, value });


export const clearBasket = () => ({ type: CLEAR_BASKET });



const getAllPrice = () => {
    const basketArr = JSON.parse(localStorage.getItem('basket'));

    const arrBasketMap = Object.keys(basketArr).map(item => {
        return basketArr[item];
    })



    const countAllPrice = arrBasketMap.reduce((sum, count) => {
        return count.price * count.selectedPortion / count.portion + sum
    }, 0)

    return countAllPrice
}