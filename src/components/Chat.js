import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';
import './Chat.css';

export default function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect (() => {
    if(roomId) {
      db.collection('rooms')
      .doc(roomId)
      .onSnapshot(snapshot => (setRoomDetails(snapshot.data())))
    }
    db.collection('rooms')
    .doc(roomId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
          <strong># {roomDetails?.name}</strong>
          <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className='chat__headerRight'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className='chat__messages'>
        {roomMessages.map(message => (
          <Message
          key={roomId}
          message={message.message}
          timestamp={message.timestamp}
          user={message.user}
          userImage={message.userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};


