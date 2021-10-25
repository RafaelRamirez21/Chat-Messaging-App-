import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';
import '../../assets/styles/ChannelPreview.scss'
const TeamChannelPreview = ({ channel, type, setToggleContainer, setIsEditing, setIsCreating, setActiveChannel }) => {
  const { channel: activeChannel, client } = useChatContext();
  const ChannelPreview = () => (
    <span className="channel-preview__item">
      <Avatar image={channel.data.image} name={channel.data.name} size={32} />
      {channel?.data?.name || channel?.data?.id}
    </span>
  );
  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID)
    console.log(members);
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.first_name + members[0]?.user?.last_name}
          size={24}

        />
        <span>{members[0]?.user?.first_name + members[0]?.user?.last_name}</span>

      </div>
    )
  }
  return (
    <div className={
      channel?.id === activeChannel?.id ? 'channel-preview__wrapper__selected' : 'channel-preview__wrapper'
    }
      onClick={() => {
        setIsEditing(false);
        setIsCreating(false);
        setActiveChannel(channel)
        if (setToggleContainer) {
          setToggleContainer((prevState) => !prevState)
        }
      }}>
      {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  )
}

export default TeamChannelPreview;
