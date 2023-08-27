const EndUser  = require('../models/EndUser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');

const EndUserController = {
  registerEndUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const tempname = name;
      // Check if an end user with the given name already exists
      const existingEndUser = await EndUser.findOne({ where: { name: tempname } });
      if (existingEndUser) {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
              return res.status(500).json({ error: 'An error occurred while authenticating.' });
            }
            if (!user) {
              return res.status(401).json({ error: 'Invalid credentials.' });
            }
            req.login(user, (err) => {
              if (err) {
                return res.status(500).json({ error: 'An error occurred while logging in.' });
              }
              return res.status(200).json({ message: 'Logged in successfully.' });
            });
          });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newEndUser = await EndUser.create({
        name,
        email,
        password: hashedPassword
      });

      res.status(201).json(newEndUser);
    } catch (error) {
      res.status(500).json({ error });
    }
  
  },
  

  listEndUsers: async (req, res) => {
    try {
      const { page = 1, perPage = 10 } = req.query;

      const endUsers = await EndUser.findAndCountAll({
        limit: perPage,
        offset: (page - 1) * perPage,
      });

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

  updateEndUser:  async (req, res) => {
    try {
      const { endUserId } = req.params;
      const { name, email, password } = req.body;

      // Check if the end user exists
      const endUser = await EndUser.findByPk(endUserId);
      if (!endUser) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      await endUser.update({ name, email, password: hashedPassword });
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
  },
  getEndUsersByName: async (req, res) => {
    try {
      const { name } = req.params;
      const endUsers = await EndUser.findAll({
        where: {
          name: { [Op.like]: `%${name}%` } // Search by partial name match
        },
        limit: 10 // Limit the results per page
      });
      res.status(200).json(endUsers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching end users.' });
    }
  }
};

module.exports = EndUserController;
