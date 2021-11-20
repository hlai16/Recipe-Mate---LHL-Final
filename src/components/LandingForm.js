import React from "react";
import classNames from "classnames";
import Buttons from "./Buttons";
import "./LandingForm.scss";
import useVisualMode from "../hooks/useVisualMode";
import { useState } from "react";
import { Form } from "react-bootstrap";

const COLLAPSE = "COLLAPSE";
const LOGINSHOW = "LOGINSHOW";
const SIGNUPSHOW = "SIGNUPSHOW";
const USERPROFILE = "USERPROFILE";

export default function LandingForm(props) {
  const [login, setLogin] = useState('')
  const [signup, setSignup] = useState('')
  const { mode, transition, back } = useVisualMode(
    login ? LOGINSHOW : COLLAPSE,
    signup? SIGNUPSHOW : COLLAPSE
  );
  // transition(SHOW, true);

  return (
    <div className="LandingOptions">
      {mode === COLLAPSE && <Buttons onClick={() => { transition(LOGINSHOW, null) }}>Login</Buttons>}
      {mode === LOGINSHOW && <Form onSubmit={() => { transition(USERPROFILE, null) }}>
        Please Enter your login info:
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Buttons type="submit">
          Submit
        </Buttons>
        <Buttons onClick={back}>
          Back
        </Buttons>
      </Form>}
      {mode === COLLAPSE && <Buttons onClick={() => { transition(SIGNUPSHOW, null) }}>Signup</Buttons>}
      {mode === SIGNUPSHOW && <Form onSubmit={() => { transition(USERPROFILE, null) }}>
        Please enter your signup info:
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Buttons type="submit">
          Submit
        </Buttons>
        <Buttons onClick={back}>
          Back
        </Buttons>
      </Form>}
      
      <Buttons>Search</Buttons>
    </div>
  );
}