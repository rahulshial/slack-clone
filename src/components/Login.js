import React from 'react'
import { Button } from '@material-ui/core';

/** Local Imports */
import { auth, provider } from '../firebase';
import './Login.css';
import { useStateValue } from '../helpers/StateProvider';
import { actionTypes } from '../helpers/reducer';

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result => {
      console.log(result);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })

    })
    .catch(error => {
      alert(error.message);
    });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt='' />
        <h1>Sign in to Slack Clone</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};
