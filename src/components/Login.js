
import Buttons from './Buttons.js';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login({ setToken, onCancel, onSubmit, setEmail, setPassword, email, password }) {
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
    
    return (
        <Form onSubmit={onSubmit}>
            <h4>Please Enter your login info:</h4>
            {/* <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="username" placeholder="Enter username" username={username} onChange={(event) => setUserName(event.target.value)} />
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;