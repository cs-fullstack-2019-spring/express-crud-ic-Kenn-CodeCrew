var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        id: Number,
        name: String,
        username: String,
        email: String,
        address:[{
            street: String,
            suite: String,
            city: String,
            zipcode: String,
            geo:[{
                lat: Number,
                lng: Number,
            }],
        }],
        phone: String,
        website: String,
        company: [{
            name: String,
            catchPhrase: String,
            bs: String,
        }],
    });

//Export model
module.exports = mongoose.model('UserData', UserSchema);