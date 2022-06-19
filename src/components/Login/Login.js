
import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    const handleEmailBlur = event => {
       setEmail(event.target.value);
    }
    const handePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if(user){
        navigate('/shop')
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id=""  required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading.... </p>
                    }
                    <div className="input-group">
                        <input className='form-submit' type="submit" value="login" />
                    </div>
                </form>
                <p className='text'>
                    New to Ema-john? <Link className='form-link' to="/signup"> Create new account</Link>
                </p>
                <p>------------------   0     ------------------</p>
            </div>
        </div>
    );
};

export default Login;