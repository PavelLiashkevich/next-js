import {getLayout} from 'components/Layout/BaseLayout/BaseLayout'
import {LoginNavigate} from 'hoc/LoginNavigate';

const Login = () => {

    return (
        <LoginNavigate>
            <button>Login</button>
        </LoginNavigate>
    )
}

Login.getLayout = getLayout

export default Login
