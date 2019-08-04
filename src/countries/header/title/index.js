import React, { Component } from 'react'
import './title.css'

class Title extends Component {

    render() {
        return <h1>Countries ({this.props.countriesList.length})</h1>
    }

}

export default Title