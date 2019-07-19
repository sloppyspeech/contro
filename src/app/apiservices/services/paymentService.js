const mongoose = require('mongoose');
const PaymentsModel = require('../models/paymentsDBModel');
let Payment = mongoose.model("UserPayments", PaymentsModel.schema, "Payments");

exports.makePayment = (req, res) => {
    console.log("in MakePayment");
    console.log(req.body);
    Payment.insertMany(
        {
            userId:req.body.userId,
            amount:req.body.amount,
            purpose:req.body.purpose,
            paymentDate:req.body.paymentDate,
            isExpense:req.body.isExpense
        },
        (err, ret) => {
            if (err) {
                console.log("PaymentService Payment Creation Error");
                console.log(err);
                res.status(500).json(ret);
            }
            else {
                res.status(200).json(ret);
            }
        }
    );
}

exports.deletePaymentForUser=(req,res) =>{
    console.log("====DeletePaymentForUser====");
    console.log(req.params.docId);
    Payment.findByIdAndDelete(req.params.docId,
        (err, ret) => {
            if (err) {
                console.log("PaymentService Payment Creation Error");
                console.log(err);
                res.status(500).json(ret);
            }
            else {
                // console.log(res);
                res.status(200).json(ret);
            }
    }
    );
}

exports.getAllPaymentsForUser = (req, res) => {
    console.log("====getAllPaymentsForUser====");
    Payment.find({"userId":req.params.userId}, (err, ret) => {
        if (err) {
            console.log("Payment Service Get All payments");
            console.log(err);
            res.status(500).json(ret);
        }
        else {
            console.log("getAllPaymentsForUser Success");
            res.status(200).json(ret);
        }
    });
}

exports.getAllApartmentExpenses = (req, res) => {
    console.log("====getAllApartmentExpenses====");
    Payment.find({"isExpense":"true"}, (err, ret) => {
        if (err) {
            console.log("Payment Service Get All expenses");
            console.log(err);
            res.status(500).json(ret);
        }
        else {
            console.log("getAllApartmentExpenses  Success");
            res.status(200).json(ret);
        }
    });
}