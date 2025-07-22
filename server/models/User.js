const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["developer", "admin"], default: "developer"},
    name: {type: String, required: true}
}, {timestamps: true});

modeule.exports = mongoose.model("User", userSchema);