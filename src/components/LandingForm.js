import React from "react";
import classNames from "classnames";
import Buttons from "./Buttons";
import "./LandingForm.scss";
import useVisualMode from "../hooks/useVisualMode";
import { useState } from "react";
import { Form } from "react-bootstrap";

const COLLAPSE = "COLLAPSE";
const SHOW = "SHOW";
const USERPROFILE = "USERPROFILE";

export default function LandingForm(props) {
  const [login, setLogin] = useState('')
  const { mode, transition, back } = useVisualMode(
    login ? SHOW : COLLAPSE
  );
  // transition(SHOW, true);

  return (
    <div className="LandingOptions">
      {mode === COLLAPSE && <Buttons onClick={() => { transition(SHOW, null) }}>Login</Buttons>}
      {mode === SHOW && <Form onSubmit={() => { transition(USERPROFILE, null) }}>

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
      </Form>}
      <Buttons>Signup</Buttons>
      <Buttons>Search</Buttons>
    </div>
  );
}