import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firabase/FirabaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const Registaion = () => {
    const navigate = useNavigate ()

    const auth = getAuth(app);

    const handleSignUp=(e)=>{
        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast.success('Sign Up Successfull')
          navigate('/login')
          const user = userCredential.user;
          console.log(user)
          form.reset()
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });

        console.log(email, password);
    } 
    return (
      <div className=''>
        <ToastContainer />
            <h1 className=' text-danger mt-3'>Registration Info</h1>
        <div className="container mt-5">
        <div className="row ">
            <div className="col-lg-6 offset-3">

            <Form onSubmit={handleSignUp}>
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
                    Sign Up
                </Button>
    </Form>
            </div>
        </div>
      </div>
      </div>
    );
};

export default Registaion;