
import Buttons from './Buttons.js';
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate, Navigate } from 'react-router-dom';
// import { useState } from "react";

async function signupUser(credentials) {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Signup({ setToken, error, onCancel, onSubmit, setEmail, setPassword, email, password }) {
    
    // function validate() {
    //     if (email === "") {
    //         setError("Email cannot be blank");
    //         return;
    //     }
    //     if (password === "") {
    //         setError('Please enter your password');
    //         return;
    //     }
    //     setError('');
    //     props.onSave(email, password);
    //     // form proceed to save if student != "" || interviewer is selected
    // }
    const reset = function () {
        return setEmail(''), setPassword('');
    }
    const cancel = function () {
        return onCancel(reset());
    }

    return (
        <Form onSubmit={onSubmit}>
            <h4>Please enter your signup info:</h4>
      
            <p>{error}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" email={email} onChange={(event) => setEmail(event.target.value)} required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" password={password} onChange={(event) => setPassword(event.target.value)} required />
            </Form.Group>

            <Buttons type="submit">
                Submit
            </Buttons>
            <Buttons onClick={cancel}>
                Back
            </Buttons>
        </Form>
    );
}

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Signup;