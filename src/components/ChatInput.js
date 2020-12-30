import React, { useState } from 'react'
import { Button } from '@material-ui/core';

/** Local Imports */
import './ChatInput.css';
import db from '../firebase';
import firebase from 'firebase';
import { useStateValue } from '../helpers/StateProvider';

export default function ChatInput(props) {
  
  const {channelName, channelId} = props;

  const [input, setInput] = useState('');
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = event => {
    event.preventDefault();
    if(channelId) {
      db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      })
    }
  }
  return (
    <div className='chatInput'>
      <form>
        <input 
        type='text'
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder={`Message #${channelName?.toLowerCase()}`}/>
        <Button type='submit' onClick={sendMessage}>Send</Button>
      </form>
    </div>
  );
};
