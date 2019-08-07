import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from './listItem'
import './list.css'

class List extends Component {

    render() {
        let { countriesList, text = '' } = this.props

        if (text)
            countriesList = countriesList.filter(country => country.name.startsWith(text))

        return <ul>{
            countriesList
                .map(country => <ListItem
                    key={country.name}
                    {...country}
                />)
        }</ul>
    }

}

export default connect(state => ({
    countriesList: state.countriesList,
    text: state.filterText
}), {})(List)