
import Buttons from './Buttons.js';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UserProfile from './UserProfile';
import { Form } from "react-bootstrap";

function Login(props) {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Form method="POST" action="/user_profile" onSubmit={props.onSubmit}>
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

            <Buttons type="submit" onClick={(event) => setLogin(event.target.value)}>
                Submit
            </Buttons>
            <Buttons onClick={props.back}>
                Back
            </Buttons>
        </Form>
    );
}

export default Login;