const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(api_key, api_secret, app_id);

    const client = StreamChat.getInstance(api_key, api_secret);

    const { users } = await client.queryUsers({ name: username})

    if(!users.length) return res.status(400).json({ message: 'User not found' });
    
    const success = await bcrypt.compare(password, users[0].hashedPassword);

    const token = serverClient.createUserToken(users[0].id)

    if(success) {
      res.status(200).json({token, fullname: users[0].name, username, userId: users[0].id});
    }else{
      res.status(500).json({ message: 'The password is incorrect.' });
    }
    
  } catch (error) {
    console.log(error);

    res.status(500).json({message: console.log(error)});
  }
};

const signup = async (req, res) => {
  try {
    const {name, lastName, email, phonenumber, post, username, password } = req.body;

    const userId = crypto.randomBytes(16).toString('hex');

    const serverClient = connect(api_key, api_secret, app_id);

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = serverClient.createUserToken(userId);

    res.status(200).json({ token, name, lastName, email, phonenumber, post, username, userId, hashedPassword });
  } catch (error) {
    console.log(error);

    res.status(500).json({message: error});
  }
};

module.exports = {login, signup}