import axios from 'axios'

export const fetchProducts = () => dispatch => {
    axios.get('http://localhost:1200/products')
        .then(res => dispatch({ type: 'PRODUCTS_FETCHED', payload: res.data }))
        .catch(error => dispatch({ type: 'PRODUCTS_FETCHED_ERROR', payload: error }))
}
