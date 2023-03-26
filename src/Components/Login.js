
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../Firabase/FirabaseConfig';

const Login = () => {

    
    const auth = getAuth(app);
    const handelLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password= form.password.value
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            toast.success('Login Successfully')
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
        console.log(email,password)
      }


    return (
        <div className='container login_section'>
            <ToastContainer />
            <div className='wrapper'>
             <h1 className='header'>Login Here</h1>
              <form onSubmit={handelLogin}>
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