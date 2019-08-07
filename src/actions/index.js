import axios from 'axios'

export const initList = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            dispatch({ payload: res.data, type: 'COUNTRIES_LIST_INIT' })
        })
        .catch(error => {
            dispatch({ payload: error.message, type: 'COUNTRIES_LIST_ERROR' })
        })
}

export const changeFilter = (text) => dispatch => {
    dispatch({ type: 'NEW_FILTER', payload: text })
}