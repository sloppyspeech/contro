const mongoose = require('mongoose');
const UsersModel = require('../models/userDBModel');
let User = mongoose.model("Users", UsersModel.schema, "Users");

exports.createUser = (req, res) => {
    console.log(req.body);
    User.insertMany(
        {
            userId: req.body.userId,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            email: req.body.email,
            status: req.body.status,
            createdDate: req.body.createdDate,
            endDate: req.body.endDate
        },
        (err, ret) => {
            if (err) {
                console.log("UserService User Creation Error");
                console.log(err);
                res.status(500).json(ret);
            }
            else {
                res.status(200).json(ret);
            }
        }
    );
}

exports.getAllUsers = (req, res) => {
    console.log("====getAllUsers====");
    User.find({}, (err, ret) => {
        if (err) {
            console.log("UserService User Creation Error");
            console.log(err);
            res.status(500).json(ret);
        }
        else {
            console.log("UserService Success");
            res.status(200).json(ret);
        }
    });
}

exports.userDetails = (req, res) => {
    console.log("====userDetails====");
    console.log(req.params.userId);
    console.log("========");
    User.findOne({ "userId": req.params.userId }, (err, ret) => {
        if (err) {
            console.log("UserService userDetails Error");
            console.log(err);
            res.status(500).json(ret);
        }
        else {
            console.log("UserService userDetails Success");
            res.status(200).json(ret);
        }
    });
}

exports.updateUserDetails = (req, res) => {
    console.log("====updateUserDetails====");
    console.log(req.params.userId);
    console.log("========");
    User.findOneAndUpdate(
        { "userId": req.params.userId },
        {
            userId: req.body.userId,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            email: req.body.email,
            status: req.body.status
        },
        (err, ret) => {
            if (err) {
                console.log("UserService updateUserDetails Error");
                console.log(err);
                res.status(500).json(ret);
            }
            else {
                console.log("UserService updateUserDetails Success");
                res.status(200).json(ret);
            }
        });
}

exports.DeleteUser = (req, res) => {
    console.log("====DeleteUser====");
    console.log(req.params.userId);
    console.log("========");
    User.findOneAndDelete({ "userId": req.params.userId }, (err, ret) => {
        if (err) {
            console.log("UserService User Deletion Error");
            console.log(err);
            res.status(500).json(ret);
        }
        else {
            console.log("UserService DeleteUser Success");
            res.status(200).json(ret);
        }
    });
}
