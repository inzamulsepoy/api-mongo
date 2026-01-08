const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../../controllers/v1/userController');

// CRUD for v1 (name + email only)
router.post('/submit', createUser);       // Create user
router.get('/all', getUsers);            // Get all users
router.get('/:id', getUserById);         // Get single user by ID
router.put('/:id', updateUser);          // Update user by ID
router.delete('/:id', deleteUser);       // Delete user by ID

module.exports = router;
