import React from 'react';

const Registration = () => {
  return (
    <div className='container login_section'>
        <div className='wrapper'>
             <h1 className='header'>Registration Here</h1>
              <form id='register' method='post'>
                <div className='login-form'>
                    <div className='label'>Email address</div>
                    <input type="email" placeholder="Enter email" />
 
                    <div className='label'>Password</div>
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </div>
               </form>
        </div>
    </div>
  );
};

export default Registration;