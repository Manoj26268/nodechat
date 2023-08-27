const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./Database/database');
const User = require('./models/User');
const Chatbot = require('./models/Chatbot');
const Conversation = require('./models/Conversation');
const EndUser = require('./models/EndUser');

require('./models/Associations');

// Require route files
const usersRoutes = require('./routes/users');
const chatbotsRoutes = require('./routes/chatbots');
const conversationsRoutes = require('./routes/conversations');
const endusersRoutes = require('./routes/endusers');

sequelize.sync().then(()=>console.log("Db is connected"));


app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/chatbots', chatbotsRoutes);
app.use('/conversations', conversationsRoutes);
app.use('/endusers', endusersRoutes);
app.get('/',(req,res)=>res.send("hi manoj"));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});