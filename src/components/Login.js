
import Buttons from './Buttons.js';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UserProfile from './AuthPages/UserProfile';
import { Form } from "react-bootstrap";

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function validate() {
        if (email === "") {
            setError("Email cannot be blank");
            return;
        }
        if (password === "") {
            setError('Please enter your password');
            return;
        }
        setError('');
        props.onSave(email, password);
        // form proceed to save if student != "" || interviewer is selected
    }
    const reset = function () {
        return setEmail(''), setPassword('');
    }
    const cancel = function () {
        return props.onCancel(reset());
    }
    return (
        <Form method="GET" action="/user_profile" onSubmit={props.onSubmit}>
            <h4>Please Enter your login info:</h4>

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

            <Buttons type="submit" onClick={validate}>
                Submit
            </Buttons>
            <Buttons onClick={cancel}>
                Back
            </Buttons>
        </Form>
    );
}

export default Login;