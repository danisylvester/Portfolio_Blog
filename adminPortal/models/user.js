const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    encryptedPassword: {
        type: String,
        required: true
    }
});

const User = new mongoose.model('User', userSchema);

module.exports = User;