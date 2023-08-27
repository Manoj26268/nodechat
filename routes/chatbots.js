// routes/chatbots.js
const express = require('express');
const router = express.Router();
const ChatbotController = require('../controllers/ChatbotController');


router.get('/:chatbotId', ChatbotController.getChatbot);
router.put('/:chatbotId', ChatbotController.updateChatbot);
router.delete('/:chatbotId', ChatbotController.deleteChatbot);
router.post('/:chatbotId/conversations', ChatbotController.startConversation);
router.get('/:chatbotId/conversations', ChatbotController.listConversationsForChatbot);
router.get('/:name', ChatbotController.getChatbotsByName);

module.exports = router;
