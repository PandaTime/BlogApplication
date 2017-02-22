const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    admin:{
        type: Boolean,
        default: false,
    },
});

User.plugin(passportLocalMongoose);
const userModel = mongoose.model('User', User);
userModel.count({}, (err, numberOfUser)=>{
    if (err) {
        console.error('Something went wrong with users scheme:', err)
    } else if (numberOfUser === 0) {
        console.info('Creating default users..');
        createDefaultUsers();
        console.info('Default users created.');
    }
});
function createDefaultUsers() {
    let username = 'qwerty',
        password = '123';
    userModel.register(
        new userModel({username, admin: true}),
        password,
        (err)=>{
            if (err) {
                console.error('Error in creating default users:', err);
            } else {
                console.info('Created admin user.');
            }
        }
    )
}

module.exports = userModel;
