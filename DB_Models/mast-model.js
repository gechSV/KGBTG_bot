const {Schema, model} = require('mongoose');

const MastSchema = new Schema({
    name: {type:String},
    createAt: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'}, 
    userName: {type: String}
})

module.exports = model('Mast', MastSchema)