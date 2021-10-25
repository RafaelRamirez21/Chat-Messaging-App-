import React, { useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import { CloseCreateChannel } from '../../assets/CloseCreateChannel';
import UserList from '../UserList/UserList';
import '../../assets/styles/createChannel.scss';

const ChannelNameImput = ({ channelName = '', setChannelName }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setChannelName(event.target.value)
  }
  return (
    <div className="channel-name-imput__wrapper">
      <p>Name</p>
      <input type="text" value={channelName} onChange={handleChange} placeholder="channel name " />
      <p>Add Members</p>
    </div>

  )
}

const CreateChannel = ({ createType, setIsCreating }) => {
  const [channelName, setChannelName] = useState('')
  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>{createType === 'team' ? 'create a New group\' work' : 'Send a Direct Message'}</p>
        <div className="create-channel__close">
        <CloseCreateChannel  setIsCreating={setIsCreating} />
        </div>
      </div>
      <hr />
      {createType === 'team' && <ChannelNameImput channelName={channelName} setChannelName={setChannelName} />}
      {/* <ChannelNameImput /> */}
      <UserList/>
    </div>
  )
}

export default CreateChannel
