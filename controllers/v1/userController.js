const User = require('../../models/userModel');

// POST /submit (name + email only)
const createUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: 'Name & Email required' });

    const user = new User({ name, email });
    await user.save();
    res.json({ message: 'User added (v1)', id: user._id });
};

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
};

// GET single user
const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};

// Update user
const updateUser = async (req, res) => {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email }, { new: true });
    res.json({ message: 'User updated (v1)', user });
};

// Delete user
const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted (v1)' });
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
