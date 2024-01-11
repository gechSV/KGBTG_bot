const {Schema, model} = require('mongoose');

const ArticleSchema = new Schema({
    articleName: {type: String},
    
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})