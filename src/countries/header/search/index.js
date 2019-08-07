import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../../../actions'
import './search.css'

class Search extends Component {

    change = e => {
        const text = e.target.value

        this.props.changeFilter(text)
    }

    render() {
        return <input
            onChange={this.change}
            className='search'
            type='search'
            placeholder='search'
        />
    }

}

export default connect(state => ({
}), { changeFilter })(Search)