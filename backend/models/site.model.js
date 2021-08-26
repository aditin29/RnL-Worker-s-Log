const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const siteSchema = new Schema({
    siteName: {type: String, required: true},      

}, {
    timestamps: true
});


const Site = mongoose.model('Site', siteSchema);

module.exports = Site;