const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../../controllers/v2/userController');

// CRUD for v2 (name + email + phone)
router.post('/submit', createUser);       // Create user (with phone)
router.get('/all', getUsers);            // Get all users (include phone)
router.get('/:id', getUserById);         // Get single user by ID
router.put('/:id', updateUser);          // Update user by ID (with phone)
router.delete('/:id', deleteUser);       // Delete user by ID

module.exports = router;
