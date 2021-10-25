import React, { useEffect, useState }from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';
// import { AiOutlineCheckCircle } from 'react-icons/ai';
import '../../assets/styles/userList.scss'

import { InviteIcon } from '../../assets/InviteIcon'

const ListContainer = ({ children }) => {
  return(
    <div className='user-list__container'>
      <div className='user-list__header'>
        <p>User</p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  )
}

const UserItem = ({ user }) =>{
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    // if(selected) {
    //     setSelectedUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser !== user.id))
    // } else {
    //     setSelectedUsers((prevUsers) => [...prevUsers, user.id])
    // }

    setSelected((prevSelected) => !prevSelected)
}
  return(
    <div className="user-item__wrapper" onClick={handleSelect}>
      <div className="user-item__name-wrapper">
        <Avatar 
        image={user.image} 
        name={user.fullname || user.id} 
        size={32} />
        <p className="user-item__name">{user.fullname || user.id}</p>
      </div>
      {selected ? <InviteIcon/> : <div className="user-item__invite-empty" />}
    </div>
  )
}

function UserList() {
  const { client } = useChatContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
       if(loading) return;

       setLoading(true);

       try {
         const response = await client.queryUsers(
           { id: { $ne: client.userID }},
           { id: 1 },
           { limit: 8 }
         );
        //  console.log(response)

         if(response.users.length ) {
           setUsers(response.users);
         } else {
          setListEmpty(true)
         }
       } catch (error) {
         console.log(error);
       }
       setLoading(false);
    }

    if(client) getUsers()

  }, [])

  return (
    <ListContainer>
      {loading ? <div className='user-list__message'>
        Loding Users...
      </div> : (
        users?.map((user, i) => (
          <UserItem index={i} key={user.id} user={user}/>
        ))
      )}
      
    </ListContainer>
  )
}

export default UserList;
