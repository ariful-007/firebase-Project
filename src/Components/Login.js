
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firabase/FirabaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate ()

    const auth = getAuth(app);
    const handleLogin =(e)=>{
        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        
        signInWithEmailAndPassword (auth,email,password)
        .then((userCredential) => {
            toast.success('login Successfull')
            navigate('/home')
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            toast.error('errorMessage')
          });
        
    } 
    return (
      <div>
         <ToastContainer />
         <h1 className=' text-center text-danger h4 fw-bold mt-3'>LOGIN</h1>
        <div className="container">
         
        <div className="row">
            <div className="col-lg-6 offset-3">

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            </div>
        </div>
      </div>
      </div>
    );
};

export default Login;