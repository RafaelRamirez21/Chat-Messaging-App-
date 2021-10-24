import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { HomeOutlined } from '@ant-design/icons'
import { CgMenuGridO } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import { AiFillSetting, AiOutlineUser, AiOutlineLogout, AiFillHome } from 'react-icons/ai'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '../index';
import '../../assets/styles/ListContainer.scss';
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
    "id": 2,
    "tag": <FaUser className="channel-list__sidebar__icon__setting" />,
  },

  {
    "id": 3,
    "tag": <AiFillSetting className="channel-list__sidebar__icon__setting" />,
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
  </div>
)

const ChannelListContainer = ({ isCreating, isEditing, setIsEditing, setCreateType, setIsCreating }) => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listProps) => (
            <TeamChannelList  {...listProps}
              type="team"
              isCreating={isCreating}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
              setIsCreating={setIsCreating}


            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"

            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listProps) => (
            <TeamChannelList  {...listProps}
              type="messaging"
              isCreating={isCreating}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
              setIsCreating={setIsCreating}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />
      </div>

    </>
  )
}

export default ChannelListContainer
