import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from '../../components';

const apiKey = 'mw4x9ttkdtcf';
const client = StreamChat.getInstance(apiKey);
const ViewMain = () => {
  return (
    <>
      <div className='main-view-chat'>
        <Chat client={client} theme='team light'>
          <ChannelListContainer>

          </ChannelListContainer>

        </Chat>
      </div>


    </>
  )
}

export default ViewMain
