const user = require('../models/users');

module.exports = {

    find: async (req, res, next) => {
        const users = await user.find(req.body.query, req.body.parms);
        res.status(200).json(users);
    },

    findById: async (req, res, next) => {
        const { userId } = req.params;
        const user = await user.findById(userId);
        res.status(200).json(user);
    },

    save: async (req, res, next) => {
        const newuser = new user(req.body);
        const user = await newuser.save();
        res.status(200).json(user);
    },

    update: async (req, res, next) => {
        const { userId } = req.params;
        const updateuser = req.body;
        const olduser = await user.findByIdAndUpdate(userId, updateuser, { useFindAndModify: false });
        const newuser = await user.findById(olduser.id);
        res.status(200).json(newuser);
    },

    remove: async (req, res, next) => {
        const { userId } = req.params;
        const user = await user.findByIdAndRemove(userId);
        res.status(200).json(user);
    }

}