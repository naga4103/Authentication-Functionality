// Write your JS
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={onLogoutClicked} className="button-class">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
