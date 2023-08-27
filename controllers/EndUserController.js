const EndUser  = require('../models/EndUser');

const EndUserController = {
  registerEndUser: async (req, res) => {
    try {
      const { name, email } = req.body;

      const endUser = await EndUser.create({ name, email });
      res.status(201).json(endUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while registering the end user.' });
    }
  },

  listEndUsers: async (req, res) => {
    try {
      const endUsers = await EndUser.findAll();
      res.status(200).json(endUsers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching end users.' });
    }
  },

  getEndUser: async (req, res) => {
    try {
      const { endUserId } = req.params;
      const endUser = await EndUser.findByPk(endUserId);

      if (!endUser) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      res.status(200).json(endUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the end user.' });
    }
  },

  updateEndUser: async (req, res) => {
    try {
      const { endUserId } = req.params;
      const { name, email } = req.body;

      const endUser = await EndUser.findByPk(endUserId);
      if (!endUser) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      endUser.name = name;
      endUser.email = email;
      await endUser.save();

      res.status(200).json({ message: 'End user updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the end user.' });
    }
  },

  deleteEndUser: async (req, res) => {
    try {
      const { endUserId } = req.params;
      const endUser = await EndUser.findByPk(endUserId);

      if (!endUser) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      await endUser.destroy();
      res.status(200).json({ message: 'End user deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the end user.' });
    }
  }
};

module.exports = EndUserController;
