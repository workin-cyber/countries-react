import axios from 'axios'

export const fetchProducts = () => dispatch => {
    axios.get('https://fullstack-store.herokuapp.com/products')
        .then(res => dispatch({ type: 'PRODUCTS_FETCHED', payload: res.data }))
        .catch(error => dispatch({ type: 'PRODUCTS_FETCHED_ERROR', payload: error }))
}

export const addToCart = product => dispatch => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
}

export const clearCart = () => dispatch => {
    dispatch({ type: 'CLEAR_CART', payload: [] })
}

export const changeAdminMode = mode => dispatch => {
    dispatch({ type: 'ADMIN_MODE_CHANGED', payload: mode })
}