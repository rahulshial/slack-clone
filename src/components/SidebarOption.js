import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarOption.css'
import db from '../firebase';

export default function SidebarOption(props) {

  const {Icon, title, id, addChannelOption } = props;

  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push('title');
    };
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name.');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      })
    }
  };

  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? (<h3>{title}</h3>) : 
        (<h3 className='sidebarOption__channel'>
            <span className='sidebarOption__hash'># {title}</span>
        </h3>
        )}
    </div>
  );
};
