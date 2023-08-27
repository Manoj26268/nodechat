// routes/users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/', UserController.createUser);
router.get('/', UserController.listUsers);
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/:userId/chatbots', UserController.createChatbot);
router.get('/:userId/chatbots', UserController.listChatbotsForUser);

module.exports = router;
