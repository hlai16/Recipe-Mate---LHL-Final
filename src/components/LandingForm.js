import React from "react";
import axios from "axios";
import Buttons from "./Buttons";
import Login from "./Login";
import Signup from "./SignUp";
import "./LandingForm.scss";
import useVisualMode from "../hooks/useVisualMode";
import { useState } from "react";



//import getUserByEmail from "./Helpers/getUserByEmail";

const COLLAPSE = "COLLAPSE";
const LOGINSHOW = "LOGINSHOW";
const SIGNUPSHOW = "SIGNUPSHOW";
const USERPROFILE = "USERPROFILE";


export default function LandingForm(props) {
  const [login, setLogin] = useState('')
  const [signup, setSignup] = useState('')
  
  // const [username, setUsername] = useState('')
  const [userId, setUserId] = useState(0)
  const { mode, transition, back } = useVisualMode(
    login ? LOGINSHOW : COLLAPSE,
    signup ? SIGNUPSHOW : COLLAPSE
  );
  // transition(SHOW, true);

  // const handleLoginForm = (event) => {
  //   // WARNING: DEAD CODE AT src/components/Helpers/getUserByEmail.js

  //   event.preventDefault()
  //   axios.post('/Users')
  //     .then((all) => {
  //       for (const user of all.data) {
  //         if (user.email === email) {
  //           if (user.password === password) {
  //             setUserId(user.id)
  //             document.cookie = `userId=${user.id}`
  //             // then redirect to /search

  //           }
  //         }
  //       }
  //     })
  // }

  return (
    <div className="LandingOptions">
      {mode === COLLAPSE && <Buttons onClick={() => { transition(LOGINSHOW, null) }}>Login</Buttons>}
      {mode === LOGINSHOW && <Login
        // setToken={props.setToken}
        onCancel={back}
      />}
      {mode === COLLAPSE && <Buttons onClick={() => { transition(SIGNUPSHOW, null) }}>Signup</Buttons>}
      {mode === SIGNUPSHOW && <Signup
        setToken={props.setToken}
        onCancel={back}
      />}
      <form method="GET" action="/search">
        <Buttons>Search</Buttons>
      </form>
   </div>
  );
}