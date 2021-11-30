import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';


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
      
      {/* <img id="Bottom-Banner" src="https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"width="550" ></img> */}
    
                  
    </>
  );
}

