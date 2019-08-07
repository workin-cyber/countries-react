import { combineReducers } from 'redux'
import countriesList from './countriesList'
import filterText from './filterText'

const allReducers = combineReducers({
    countriesList,
    filterText
})

export default allReducers