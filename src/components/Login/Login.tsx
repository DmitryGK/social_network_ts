import React from 'react';
import { reduxForm } from 'redux-form';

const LoginForm = () => {

    return (  
            <form>
                <div>
                    <input placeholder={'Login'}/>
                </div>
                <div>
                <input placeholder={'Password'}/>
                </div>
                <div>
                    <input type={'checkbox'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}



export default Login