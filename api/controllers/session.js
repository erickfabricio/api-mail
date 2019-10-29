const User = require('../models/users');
const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

    signUp: async (req, res, next) => {
        //validate email existence
        const user = await User.findOne({ mail: req.body.mail });
        if (!user) {
            req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(200).json({ ok: true, menssage: "User registered successfully", user: user });
        }else{
            res.status(401).json({ ok: false, menssage: "Email is already registered" });
        }
    },

    login: async (req, res, next) => {
        console.log(req.body);
        //Search user        
        const user = await User.findOne({ mail: req.body.mail });
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    //Generate token
                    let token = jwt.sign(
                        {
                            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
                            data: user.mail
                        },
                        config.key
                    );
                    //console.log(token);
                    res.status(200).json({ ok: true, menssage: "Correct login", token: token, user: user });
                } else {
                    res.status(200).json({ ok: false, menssage: "Incorrect password" });
                }
            })
        } else {
            res.status(200).json({ ok: false, menssage: "Email not registered" });
        }
    }

}