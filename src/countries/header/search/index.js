import React, { Component } from 'react'
import './search.css'

class Search extends Component {

    change = e => {
        const text = e.target.value

        this.props.change(text)
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

export default Search