// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onLoginClicked = async event => {
    event.preventDefault()
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = props

      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
      })
      history.replace('/')
    } else {
      console.log(data.error_msg)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onLoginClicked} className="button-class">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
