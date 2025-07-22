const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//signup Endpoint Logic
exports.signup = async (req, res) => {
    const {email, password} = req.body;

    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({message: "User already exists"});

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({email, password: hash});

    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_TOKEN, {expiresIn: "7d"});
    res.json({token});
};

//Login Endpoint Logic
exports.login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(404).json({message: "User not found"});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(401).json({message: "Incorrect Password"});

    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_TOKEN, {expiresIn: "7d"});
    res.json({token});
}