const User  = require('../models/User'); 
const Chatbot  = require('../models/Chatbot'); 

const UserController = {
  createUser: async (req, res) => {
    try {
      const { username } = req.body;
      const newUser = await User.create({ username });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error});
    }
  },

  listUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the user.' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { username } = req.body;
      const user = await User.findByPk(id);
      if (user) {
        await user.update({ username });
        res.status(200).json({ message: 'User updated successfully.' });
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully.' });
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
  },
  createChatbot: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name } = req.body;
  
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
  
      const chatbot = await Chatbot.create({ name, UserId: userId });
      res.status(201).json(chatbot);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating the chatbot.' });
    }
  },
  

  listChatbotsForUser: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await User.findByPk(userId, {
        include: [{ model: Chatbot, as: 'Chatbots' }]
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json(user.Chatbots);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching chatbots.' });
    }
  }
};

module.exports = UserController;
