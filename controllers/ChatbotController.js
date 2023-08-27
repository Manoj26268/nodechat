const  Chatbot  = require('../models/Chatbot');
const User  = require('../models/User');
const Conversation = require('../models/Conversation');

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

      const chatbot = await Chatbot.findByPk(chatbotId);
      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      const conversation = await Conversation.create({ ChatbotId: chatbotId });
      res.status(201).json(conversation);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  listConversationsForChatbot: async (req, res) => {
    try {
      const { chatbotId } = req.params;

      const chatbot = await Chatbot.findByPk(chatbotId);
      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      const conversations = await Conversation.findAll({ where: { ChatbotId: chatbotId } });
      res.status(200).json(conversations);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

module.exports = ChatbotController;
