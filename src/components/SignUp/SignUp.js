import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        // setEmail('');
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        // setPassword('');
    }
    const handeConfirmedPasswordBlur = event => {
        setConfirmPassword(event.target.value);
        // setConfirmPassword('');
    }
    if(user){
        navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
          setError('Your two passwords did not match')
          return;
        }
        if(password.length <6){
            setError('password must be 6 character or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    // const handleFormSubmit = event => {
       
    //     createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
       
    // }
    return(
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form  onSubmit={ handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handeConfirmedPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{color: "red"}}>{error}</p>
                    <div className="input-group">
                        <input  className='form-submit' type="submit" value="signup" />
                    </div>
                </form>
                <p className='text'>
                    Allready have an Account? <Link className='form-link' to="/login"> Login</Link>
                </p>
                <p>------------------ 0 ------------------</p>
            </div>
        </div>
    );
};

export default SignUp;