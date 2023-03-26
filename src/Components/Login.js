
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../Firabase/FirabaseConfig';


const Login = () => {

  const navigate = useNavigate()

  const auth = getAuth(app);

  const handleLogin = (e) =>{
    e.preventDefault()
    const from = e.target;
    const email = from.email.value
    const password = from.password.value

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      navigate('/') 
      const user = userCredential.user;
      console.log(user)
      from.reset()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });

    console.log(email,password)
  }


    return (
        <div className='container login_section'>
            
            <div className='wrapper'>
             <h1 className='header'>Login Here</h1>
              <form onSubmit={handleLogin}>
                <div className='login-form'>
                    <div className='label'>Email address</div>
                    <input name='email' type="email" placeholder="Enter email" />
 
                    <div className='label'>Password</div>
                    <input name='password' type="password" placeholder="Password" />
                    <button type='submit'>Login</button>
                </div>
               </form>
            </div>
        </div>
    );
};

export default Login;