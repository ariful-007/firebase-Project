import React  from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firabase/FirabaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const navigate = useNavigate()
  const auth = getAuth(app);


  const handelSignUp = (e) =>{
    e.preventDefault()
    const from = e.target;
    const email = from.email.value
    const password =from.password.value
    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      toast.success('Registration Successfully')
      navigate('/login')
      const user = userCredential.user;
      console.log(user)
      from.reset()
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
             <h1 className='header'>Registration Here</h1>
              <form onSubmit={handelSignUp} >
                <div className='login-form'>
                    <div className='label'>Email address</div>
                    <input name='email' type="email" placeholder="Enter email" />
 
                    <div className='label'>Password</div>
                    <input name='password' type="password" placeholder="Password" />
                    <button type='submit' >Sign Up</button>
                </div>
               </form>
        </div>
    </div>
  );
};

export default Registration;