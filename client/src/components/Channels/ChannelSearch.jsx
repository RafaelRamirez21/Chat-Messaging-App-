import React, { useState, useEffect } from 'react';
import { getChannel, useContext } from 'stream-chat-react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../../assets/styles/SearchChat.scss'
const ChannelSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const getChannels = async (text) => {
    try {
      //

    } catch (error) {
      setQuery('')
    }
  }

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value)
    getChannels(e.target.value)
  }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <AiOutlineSearch className="channel-search__input__icon__setting" />
        </div>
        <input type="text" placeholder="Search" className="channel-search__input__text" value={query} onChange={onSearch} />
      </div>

    </div>
  )
}

export default ChannelSearch;
