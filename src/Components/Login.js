
import React from 'react';

const Login = () => {
    return (
        <div className='container login_section'>
            <div className='wrapper'>
             <h1 className='header'>Login Here</h1>
              <form id='register' method='post'>
                <div className='login-form'>
                    <div className='label'>Email address</div>
                    <input type="email" placeholder="Enter email" />
 
                    <div className='label'>Password</div>
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </div>
               </form>
            </div>
        </div>
    );
};

export default Login;