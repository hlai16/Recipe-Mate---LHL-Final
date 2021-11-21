import React from "react";
import classNames from "classnames";
import Buttons from "./Buttons";
import "./LandingForm.scss";
import useVisualMode from "../hooks/useVisualMode";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Search from "./Search/index.js";

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
  const { mode, transition, back } = useVisualMode(
    login ? LOGINSHOW : COLLAPSE,
    signup ? SIGNUPSHOW : COLLAPSE
  );
  // transition(SHOW, true);

  return (
    <div className="LandingOptions">
      {mode === COLLAPSE && <Buttons onClick={() => { transition(LOGINSHOW, null) }}>Login</Buttons>}
      {mode === LOGINSHOW && <Form onSubmit={() => { transition(USERPROFILE, null) }}>
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
        <Buttons onClick={back}>
          Back
        </Buttons>
      </Form>}
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
      {/* <Form method="GET" action="/search">
      <Buttons>Search</Buttons>
      </Form> */}
    </div>
  );
}