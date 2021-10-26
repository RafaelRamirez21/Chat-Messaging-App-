import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { HomeOutlined } from '@ant-design/icons'
import { CgMenuGridO } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import { AiFillSetting, AiOutlineUser, AiOutlineLogout, AiFillHome } from 'react-icons/ai'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '../index';
import '../../assets/styles/ListContainer.scss';
import { CloseCreateChannel } from '../../assets/CloseCreateChannel'
const cookies = new Cookies();



export const logout = () => {
  cookies.remove("token");
  cookies.remove('userId');
  cookies.remove('post');
  cookies.remove('username');
  cookies.remove('name');
  cookies.remove('lastName');
  cookies.remove('email');
  cookies.remove('hashedPassword');

  window.location.reload();
}

const menu = [
  {
    "id": 1,
    "tag": <AiFillHome className="channel-list__sidebar__icon__setting" />,
  },
  {
    "id": 4,
    "tag": <AiOutlineLogout onClick={() => logout()} className="channel-list__sidebar__icon__setting" />,
  },
]

const SideBar = () => (
  <div className="channel-list__sidebar">
    {menu.map((item, index) =>
      <div key={index} className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          {item.tag}
        </div>
      </div>
    )}
  </div>

);
const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Profile</p>
    <div className='channel-list__header__closeIcon'>
      <CloseCreateChannel />
    </div>
  </div>
)
const customChannelTeamFilter = (channels) => {
  return channels.filter((channel) => channel.type === 'team')
}
const customChannelMessagingFilter = (channels) => {
  return channels.filter((channel) => channel.type === 'messaging')
}

const ChannelListContent = ({ isCreating, isEditing, setIsEditing, setCreateType, setIsCreating, setToggleContainer }) => {
  const { client } = useChatContext();
  const filters = { members: { $in: [client.userID] } }

// const CustomListContainer = (props) => {
//     <div className="prueba">
//       <div className="team-channel-list">

//       </div>
//     </div>
// };

  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch setToggleContainer={setToggleContainer} />
        <div className="channel-list-wrapper">
        <ChannelList
          className="str-chat str-chat-channel-list team light"
          filters={filters}
          channelRenderFilterFn={customChannelTeamFilter}
          List={(listProps) => (
            <TeamChannelList  {...listProps}
              type="team"
              isCreating={isCreating}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
              setIsCreating={setIsCreating}
              setToggleContainer={setToggleContainer}
            />
          )}
          
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
              setIsEditing={setIsEditing}
              setIsCreating={setIsCreating}
              setToggleContainer={setToggleContainer}

            />
          )}
        />
        

        <ChannelList
          className="str-chat str-chat-channel-list team light"
          filters={filters}
          channelRenderFilterFn={customChannelMessagingFilter}
          List={(listProps) => (
            <TeamChannelList  {...listProps}
              type="messaging"
              isCreating={isCreating}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
              setToggleContainer={setToggleContainer}
              setIsCreating={setIsCreating}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              setToggleContainer={setToggleContainer}
              type="messaging"
              setIsEditing={setIsEditing}
              setIsCreating={setIsCreating}

            />
          )}
        />
        </div>
      </div>

    </>
  )
}
const ChannelListContainer = ({ isCreating, isEditing, setIsEditing, setCreateType, setIsCreating }) => {
  const [toggleContainer, setToggleContainer] = useState(false)

  return (
    <>
      <div className="channel-list__container">
        <ChannelListContent
          isCreating={isCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating} />
      </div>
      <div className="channel-list__container-responsive"
        style={{ left: toggleContainer ? '0%' : '.89%', backgroundColor: 'white' }}
      >
        <div className="channel-list__container-toogle" onClick={() => setToggleContainer(!toggleContainer)}></div>
        <ChannelListContent
          isCreating={isCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          setToggleContainer={setToggleContainer}
        />
      </div>
    </>
  )
}
export default ChannelListContainer
