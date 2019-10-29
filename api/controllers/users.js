const User = require('../models/users');

const jwt = require('jsonwebtoken');
const config = require('../../config');

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

    find: async (req, res, next) => {
        const users = await User.find(req.body.query, req.body.parms);
        res.status(200).json(users);
    },

    findById: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    save: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    },

    update: async (req, res, next) => {
        const { userId } = req.params;
        const updateUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, updateUser, { useFindAndModify: false });
        const newUser = await User.findById(oldUser.id);
        res.status(200).json(newUser);
    },

    remove: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findByIdAndRemove(userId);
        res.status(200).json(user);
    },
    
    login: async (req, res, next) => {
        //Search user        
        const user = await User.findOne({ mail: req.body.mail });
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    //Generate token
                    let token = jwt.sign(
                        {
                            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
                            data: user._id
                        },
                        config.key
                    );                    
                    console.log(token);
                    res.status(200).json({ error: false, token: token, user: user });
                } else {
                    res.status(200).json({ error: true, menssage: "Incorrect password" });
                }
            })
        } else {
            res.status(200).json({ error: true, menssage: "Email not registered" });
        }
    }
    
}