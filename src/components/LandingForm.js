import React from "react";
import axios from "axios";
import classNames from "classnames";
import Buttons from "./Buttons";
import Login from "./Login";
import UserProfile from "./UserProfile";
import "./LandingForm.scss";
import useVisualMode from "../hooks/useVisualMode";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Search from "./Search/index.js";
//import getUserByEmail from "./Helpers/getUserByEmail";

const COLLAPSE = "COLLAPSE";
const LOGINSHOW = "LOGINSHOW";
const SIGNUPSHOW = "SIGNUPSHOW";
const USERPROFILE = "USERPROFILE";


export default function LandingForm(props) {
  const [login, setLogin] = useState('')
  const [signup, setSignup] = useState('')
  // const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userId, setUserId] = useState(0)
  const { mode, transition, back } = useVisualMode(
    login ? LOGINSHOW : COLLAPSE,
    signup ? SIGNUPSHOW : COLLAPSE
  );
  // transition(SHOW, true);

  const handleLoginForm = (event) => {
    // WARNING: DEAD CODE AT src/components/Helpers/getUserByEmail.js

    event.preventDefault()
    axios.post('/Users')
    .then((all) => {
        for (const user of all.data) {
          if (user.email === email) {
            if (user.password === password) {
              setUserId(user.id)
              document.cookie = `userId=${user.id}`
              // then redirect to /search
              
            } 
          }
        }
    })
  }

  return (
    <div className="LandingOptions">
      {mode === COLLAPSE && <Buttons onClick={() => { transition(LOGINSHOW, null) }}>Login</Buttons>}
      {mode === LOGINSHOW && <Login 
        // onSubmit={handleLoginForm} 
        // email={props.email}
        // password={props.password}
        // onSave={event => setSignup(event.target.value)}
      />}
      {mode === COLLAPSE && <Buttons onClick={() => { transition(SIGNUPSHOW, null) }}>Signup</Buttons>}
      {mode === SIGNUPSHOW && <Form onSubmit={() => { transition(USERPROFILE, null) }}>
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

        <Buttons type="submit" onClick={(event) => setSignup(event.target.value)}>
          Submit
        </Buttons>
        <Buttons onClick={back}>
          Back
        </Buttons>
      </Form>}
      <Form method="GET" action="/search">
        <Buttons>Search</Buttons>
      </Form>
    </div>
  );
}