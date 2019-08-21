import { combineReducers } from 'redux'
import adminMode from './adminMode'
import products from './products'
import cart from './cart'

const allReducers = combineReducers({
    cart,
    products,
    adminMode
})

export default allReducers