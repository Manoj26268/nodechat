const Conversation = require('../models/Conversation');
const  Chatbot  = require('../models/Chatbot');
const EndUser  = require('../models/EndUser');

const ConversationController = {
  

    getConversation: async (req, res) => {
        try {
          const { conversationId } = req.params;
          const conversation = await Conversation.findByPk(conversationId);
    
          if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found.' });
          }
    
          res.status(200).json(conversation);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching the conversation.' });
        }
      },

  updateConversation: async (req, res) => {
    try {
      const { conversationId } = req.params;

      const conversation = await Conversation.findByPk(conversationId);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found.' });
      }

      // Update conversation properties
      // For example, mark it as completed

      await conversation.save();

      res.status(200).json({ message: 'Conversation updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the conversation.' });
    }
  },

    endConversation: async (req, res) => {
        try {
          const { conversationId } = req.params;
          const conversation = await Conversation.findByPk(conversationId);
    
          if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found.' });
          }
    
          await conversation.destroy();
          res.status(200).json({ message: 'Conversation deleted successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while deleting the conversation.' });
        }
      }
};

module.exports = ConversationController;
