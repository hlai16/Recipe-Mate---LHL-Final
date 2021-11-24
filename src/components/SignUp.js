
import Buttons from './Buttons.js';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

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

function Signup({setToken, onCancel, onSubmit, setEmail, setPassword, email, password }) {
    const [username, setUserName] = useState();
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [error, setError] = useState('')

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

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signupUser({
            email,
            password
        });
        setToken(token);
        <Navigate to="/" />
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h4>Please enter your signup info:</h4>
            {/* <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="username" placeholder="Enter username" username={username} onChange={(event) => setUsername(event.target.value)} />
            </Form.Group> */}
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