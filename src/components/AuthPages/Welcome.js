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
      <h3>Welcome!</h3>
      <p>Your are logged in with the following e-mail address: </p>
      <p>{userEmail}</p>
    </>
  );
}

