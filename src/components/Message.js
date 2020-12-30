import React from 'react'

import './Message.css';

export default function Message(props) {
  const {message, timestamp, user, userImage} = props;

  return (
    <div className='message'>
      <img src={userImage} alt='' />
      <div className='message__info'>
        <h4>{user} 
        <span className='message__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        <p>{message}</p>
      </div>
    </div>
  );
};
