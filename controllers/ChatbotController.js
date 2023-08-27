const  Chatbot  = require('../models/Chatbot');
const User  = require('../models/User');
const Conversation = require('../models/Conversation');
const { Op } = require('sequelize');

const ChatbotController = {

  getChatbot: async (req, res) => {
    try {
      const { chatbotId } = req.params;
      const chatbot = await Chatbot.findByPk(chatbotId);

      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      res.status(200).json(chatbot);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the chatbot.' });
    }
  },

  updateChatbot: async (req, res) => {
    try {
      const { chatbotId } = req.params;
      const { name } = req.body;

      const chatbot = await Chatbot.findByPk(chatbotId);
      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      chatbot.name = name;
      await chatbot.save();

      res.status(200).json({ message: 'Chatbot updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the chatbot.' });
    }
  },

  deleteChatbot: async (req, res) => {
    try {
      const { chatbotId } = req.params;
      const chatbot = await Chatbot.findByPk(chatbotId);

      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      await chatbot.destroy();
      res.status(200).json({ message: 'Chatbot deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the chatbot.' });
    }
  },
  startConversation: async (req, res) => {
    try {
      const { chatbotId } = req.params;
      const { text } = req.body;
      const { endUserId }= req.body;
      const chatbot = await Chatbot.findByPk(chatbotId);
      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      const conversation = await Conversation.create({
        ChatbotId: chatbotId,
        EndUserId: endUserId,
        text: text, // Store the text in the conversation
      });

      res.status(201).json(conversation);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  listConversationsForChatbot: async (req, res) => {
    try {
      const { page = 1, perPage = 10 } = req.query;

      const conversations = await Conversation.findAndCountAll({
        limit: perPage,
        offset: (page - 1) * perPage,
      });

      res.status(200).json(conversations);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching conversations.' });
    }
  },
  getChatbotsByName: async (req, res) => {
    try {
      const { name } = req.params;
      const chatbots = await Chatbot.findAll({
        where: {
          name: { [Op.like]: `%${name}%` } // Search by partial name match
        },
        limit: 10 // Limit the results per page
      });
      res.status(200).json(chatbots);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching chatbots.' });
    }
  }
};

module.exports = ChatbotController;
