import { ActionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}
export const removeProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: products,
    }
}