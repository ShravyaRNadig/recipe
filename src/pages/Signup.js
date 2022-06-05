import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
// import Login from './Login';
const Signup = (props) => {
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
            props.checkSignIn(false)
        } else {
            setSubmitted(true);
            setError(false);
            // props.checkSignIn(true)
            navigate('./home', { replace: true });
        }
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',

                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div className="form">
            <div style={styles}>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages" style={styles}>
                {errorMessage()}
                {/* {successMessage()} */}
            </div>
            <div style={styles}>
                <form>
                    {/* Labels and inputs for form data */}
                    {/* <label className="label">Name</label> */}
                    <input onChange={handleName} className="input"
                        value={name} type="text" placeholder='Name' />
                    <br /><br />
                    {/* <label className="label">Email</label> */}
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" placeholder='Email' />
                   
                    <br /><br />
                    {/* <label className="label">Password</label> */}
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" placeholder='Password' />
                    <br /><br />
                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                    {/* <p>Already registerd?<a href='/Login'>Login</a></p> */}
                </form>
            </div>
        </div>
    );
}

export default Signup;