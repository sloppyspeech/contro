const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: { type: Number, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    createdDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});


module.exports = mongoose.model('Users', UserSchema);