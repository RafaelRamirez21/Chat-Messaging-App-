import React from 'react';
// import { StreamChat } from 'stream-chat';
// import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import { ChannelListContainer, ChannelContainer } from '../../components';

// const apiKey = 'mw4x9ttkdtcf';
// const client = StreamChat.getInstance(apiKey);

const cookies = new Cookies();

const ViewMain = () => {

  const logout = () =>{
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

  return (
    <>
      {/* <div className='main-view-chat'>
        <Chat client={client} theme='team light'>
          <ChanelListContainer>

          </ChanelListContainer>

        </Chat> 
        
      </div> */}
      <h1>la carga fue un exito</h1>

      <div onClick={logout}> boton de salida </div>

    </>
  )
}

export default ViewMain
