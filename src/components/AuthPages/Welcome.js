import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Welcome(props) {

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    axios
      .get(`/users/${props.userId}`)
      .then(res => setUserEmail(res.data[0].email))
  }, []);

  return (
    <>
     
      <h1 className="Greetingheader">Welcome to Recipe Mate!</h1>
      <p className="loginAs">You are logged in with the following e-mail address: </p>
      <p className="loginEmail">{userEmail}</p>
      <article id="Welcome">
      <p className="Greeting">You're in the right place to share recipes and inspiration!
        Please, choose an option from the navigation bar . Select Catagories if you would like to browse, Click on Create if you want to share a recipe, or type in Search bar if you have something particular in mind.
        You will also see your profile navigation bar , All your creations as well as your favorites are safe here! 
        We hope you enjoy Recipe Mate , Stay Inspired!
      </p>
     
      </article>
      <img id="Bottom-Banner" src="https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"width="550" ></img>
    
                  
    </>
  );
}

