import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AddChannel } from '../../assets/AddChannel';
import '../../assets/styles/ChannelList.scss';
const TeamChannelList = ({ children, error = false, loading, type, isCreating, isEditing, setIsEditing, setCreateType, setIsCreating, setToggleContainer }) => {
  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment a try again
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messages'} loading...
        </p>
      </div>

    )
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Groups' : 'Direct Messages'}
        </p>
        <AddChannel
          isCreating={isCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          type={type === 'team' ? 'team' : 'messaging'}
          setToggleContainer={setToggleContainer}
        />
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList;
