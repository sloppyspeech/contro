const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const userService = require('./services/userService');
const paymentService = require('./services/paymentService');
const app = express();
const port = 3301;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./dbConn');

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


app
    .route("/users")
    .get(userService.getAllUsers)

app
    .route("/user/:userId")
    .get(userService.userDetails)
    .put(userService.updateUserDetails)
    .delete(userService.DeleteUser);

app
    .route("/user")
    .post(userService.createUser);

app
    .route("/payments/:paymentId")
    .get(paymentService.getAllPaymentsForUser)
    .post(paymentService.makePayment);

app
    .route("/payments/:docId")
    .delete(paymentService.deletePaymentForUser);

app
    .route("/expenses/:userId")
    .get(paymentService.getAllApartmentExpenses);