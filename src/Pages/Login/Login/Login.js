import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 p-lg-5 mx-auto bg-light shadow mt-5 rounded">
                    <h4 className="text-center mb-5">LOGIN</h4>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Email"
                                className="border-0 border-bottom border-dark rounded-0"
                            />
                            <label htmlFor="floatingInputCustom">Your Email</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Password"
                                className="border-0 border-bottom border-dark rounded-0"
                            />
                            <label htmlFor="floatingPasswordCustom">Your Password</label>
                        </Form.Floating>
                        <button type="submit" className="btn btn-primary w-100 mt-3">LOGIN</button>
                        <Link to="/register">
                            <button className="btn btn-warning w-100 mt-3">NEW USER? PLEASE REGISTER</button>
                        </Link>
                    </form>}

                    {!isLoading && <>
                        <h4 className="text-center mt-3">OR</h4>
                        <button onClick={handleGoogleSignIn} className="btn btn-secondary w-100 mt-3">LOGIN WITH GOOGLE</button>
                    </>}

                    {isLoading && <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />}
                    {user?.email && <Alert variant="success" className="mt-3">Logged in Successfully</Alert>}
                    {authError && <Alert variant="danger" className="mt-3">{authError}</Alert>}
                </div>
            </div>
        </div>
    );
};

export default Login;