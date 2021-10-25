import React, { useState } from 'react';
// import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from '../../components';
import '../../assets/styles/ViewTeams.scss';

import { client } from '../routes/App';

const ViewMain = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className='main-view-chat'>
        <Chat client={client} theme='team light'>
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setCreateType={setCreateType}

          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />



        </Chat>

      </div>


    </>
  )
}

export default ViewMain;
