import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
    const { auth, signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at lease 6 character long')
            return;
        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    return (
        <Container className="pt-5 mt-3">

            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger text-center">
                    <p>{error}</p>
                </div>
                <button type="submit" className="btn mb-1 btn-primary">{isLogin ? 'Login' : 'Register'}</button><br />
                <button onClick={signInUsingGoogle} className="btn mb-1 btn-primary">Google Login</button><br />
                <button type="button" onClick={handleResetPassword} className="btn mb-1 btn-primary btn-sm">Reset Password</button>

            </form>




            <br /><br /><br />

        </Container>
    );
};

export default Login;