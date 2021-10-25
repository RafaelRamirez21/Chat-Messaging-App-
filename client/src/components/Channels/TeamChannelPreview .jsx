import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';
import '../../assets/styles/ChannelPreview.scss'
const TeamChannelPreview = ({ channel, type, setToggleContainer, setIsEditing, setIsCreating, setActiveChannel }) => {
  const { channel: activeChannel, client } = useChatContext();
  const ChannelPreview = () => (
    <span className="channel-preview__item group">
      <Avatar image={channel.data.image} name={channel.data.name} size={32} />
      {channel?.data?.name || channel?.data?.id}
    </span>
  );
  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID)
<<<<<<< HEAD

=======
    //console.log(members);
>>>>>>> 23c7dd720ac0a66d6d9d86cef7f917e2c97eb56f
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullname || members[0]?.user?.id + members[0]?.user?.lastName}
          size={24}

        />
        <span>{members[0]?.user?.fullname === undefined ? members[0]?.user?.id : members[0]?.user?.fullname+ ' ' + members[0]?.user?.lastName}</span>

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
