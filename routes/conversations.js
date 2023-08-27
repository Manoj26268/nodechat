// routes/conversations.js
const express = require('express');
const router = express.Router();
const ConversationController = require('../controllers/ConversationController');


router.get('/:conversationId', ConversationController.getConversation);
router.put('/:conversationId', ConversationController.updateConversation);
router.delete('/:conversationId', ConversationController.endConversation);

module.exports = router;
