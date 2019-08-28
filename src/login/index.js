import React, { Component } from 'react'
import axios from 'axios'
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    submit = e => {
        e.preventDefault()
        console.log('submit')

        const { username, password } = this.refs

        const loginObj = {
            username: username.value,
            password: password.value
        }
        console.log(loginObj)
        axios.post('http://localhost:1200/login', loginObj)
            .then(res => {
                if (res.data.error)
                    this.setState({ error: res.data.error })
                else this.setState({ error: '' })
                console.log(res)
            })
            .catch(res => {
                this.setState({ error: res.data.error })
            })
    }

    render() {
        const { error } = this.state
        return <form className='login' onSubmit={this.submit}>

            <label>
                <span>שם משתמש:</span>
                <input required ref='username' type='text' placeholder='שם המשתמש שלך' />
            </label>

            <label>
                <span>סיסמא:</span>
                <input required ref='password' type='password' placeholder='הסיסמא שלך' />
            </label>

            {error ? <div className='error'>{error}</div> : null}
            <input type='submit' value='כניסה' />
        </form>
    }
}

export default Login