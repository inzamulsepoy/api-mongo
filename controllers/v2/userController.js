const User = require('../../models/userModel');

// POST /submit (name + email + phone)
const createUser = async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone)
        return res.status(400).json({ message: 'Name, Email & Phone required' });

    const user = new User({ name, email, phone });
    await user.save();
    res.json({ message: 'User added (v2)', user });
};

// GET all users (include phone)
const getUsers = async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users); // users now include phone
};

// GET single user
const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found (v2)' });
    res.json(user);
};

// Update user (include phone)
const updateUser = async (req, res) => {
    const { name, email, phone } = req.body;
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { name, email, phone },
        { new: true }
    );
    res.json({ message: 'User updated (v2)', user });
};

// Delete user
const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted (v2)' });
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
