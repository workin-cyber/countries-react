import React, { Component } from 'react'
import axios from 'axios'
import Header from './header'
import List from './list'
import './countries.css'

class Countries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        /* setTimeout(() => {
        }, 2000) */

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                this.setState({ loading: false, countriesList: res.data })
            })
            .catch(error => {
                this.setState({ loading: false, error: error.message })
            })
    }

    onTextChange = (text) => {
        this.setState({ text })
    }

    render() {
        const { countriesList, loading, text } = this.state

        return loading ? 'טוען' : <main className='countries'>
            <Header countriesList={countriesList} change={this.onTextChange} />
            <List countriesList={countriesList} text={text} />
        </main>
    }

}

export default Countries