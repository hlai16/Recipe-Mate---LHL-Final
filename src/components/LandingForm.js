import React from "react";
import classNames from "classnames";
import Buttons from "./Buttons";
import "./LandingForm.scss";



export default function LandingForm(props) {
   
 
   return (
     <div className="LandingOptions">
         <Buttons>Login</Buttons>
         <Buttons>Signup</Buttons>
         <Buttons>Search</Buttons>
     </div>
   );
 }