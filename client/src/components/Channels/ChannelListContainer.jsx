import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { Cookies } from 'universal-cookie';
import { HomeOutlined } from '@ant-design/icons'
import { CgMenuGridO } from 'react-icons/cg'
import { GrHomeRounded } from 'react-icons/gr'
import { AiOutlineStar, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '../index';
import '../../assets/styles/ListContainer.scss'

const menu = [
  {
    "id": 1,
    "tag": <GrHomeRounded className="channel-list__sidebar__icon__setting" />,
  },
  {
    "id": 2,
    "tag": <AiOutlineStar className="channel-list__sidebar__icon__setting" />,
  },
  {
    "id": 3,
    "tag": <AiOutlineUser className="channel-list__sidebar__icon__setting" />,
  },

  {
    "id": 4,
    "tag": <AiOutlineLogout className="channel-list__sidebar__icon__setting" />,
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

const ChannelListContainer = () => {
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
              type="team" />
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
              type="messaging" />
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
