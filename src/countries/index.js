import React, { Component } from 'react'
import Header from './header'
import List from './list'
import { connect } from 'react-redux'
import { initList } from '../actions'
import './countries.css'

class Countries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.initList()
    }

    onTextChange = (text) => {
        this.setState({ text })
    }

    render() {
        const { countriesList } = this.props,
            { text } = this.state

        return countriesList ? <main className='countries'>
            <Header />
            <List text={text} />
        </main> : 'טוען'
    }

}



export default connect(state => ({
    countriesList: state.countriesList
}), { initList })(Countries)