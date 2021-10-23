import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from '../../components';
import '../../assets/styles/ViewTeams.scss'
const apiKey = 'mw4x9ttkdtcf';
const client = StreamChat.getInstance(apiKey);
const authToken = false;

const ViewMain = () => {
  if (!authToken) return <Auth />
  return (
    <>
      <div className='main-view-chat'>
        <Chat client={client} theme='team light'>
          <ChannelListContainer />
          <ChannelContainer />



        </Chat>
      </div>


    </>
  )
}

export default ViewMain
