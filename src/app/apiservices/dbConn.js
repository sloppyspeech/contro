const mongoose = require("mongoose");
const dbURI = "mongodb+srv://johndoe@cluster01-yztk6.mongodb.net/Test?retryWrites=true&w=majority";
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolsize: 10
};


mongoose.connect(dbURI, {
  auth: {
    user: 'johndoe',
    password: ''
  }
})
  .then(() => console.log('Mongod Is working'))
  .catch((err) => console.error("Mongod is angry ", err));

// require('./models/controDBModel');
// require('./models/contro/UserPayments');