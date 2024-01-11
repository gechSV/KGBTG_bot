const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    id: {type: Number, unique: false, requred: false}, 
    userName: {type: String, requred: true, unique: true},
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''}
})

module.exports = model('User', UserSchema);