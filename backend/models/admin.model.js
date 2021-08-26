const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const adminSchema = new Schema({
    Name: {type: String, required: true},      
    Password: {type: String, required: true}
}, {
    timestamps: true
});


const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;