const express = require("express");
const User = require("../Model/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../midleware/Auth");
const cors = require("cors");

/**
    # API BODY USER

    first_name,
    last_name,
    email: ,
    password:
    token:

 */

const userRouter = express.Router();

async function CreateUser(req, res) {
    try {
        //get user input
        const { first_name, last_name, email, password } = req.body;

        //validate user input
        if (!email && !password && !first_name && !last_name) {
            res.status(400).send("All inputs is required..")
        }

        //check if user already exist
        //validate if user exist in our DB
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exists. Please Login");
        }

        //encrypt password
        const encryptedUserPassword = await bcrypt.hash(password, 10);

        //create user in our DB
        const user = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email.toLowerCase(),
            password: password,
            token: encryptedUserPassword
        })

        //create a token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            { expiresIn: "5h" }
        );

        //Save user token
        user.token = token;

        //return new user
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
    }
}

async function RegisterUser(req, res) {
    try {
        //get user input
        const { email, password } = req.body;

        //validate user input
        if (!eamil && !password) {
            res.status(400).send("All input is required");
        }

        //validate if user exists in our DB
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            //create a token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "5h" }
            );

            //save user token
            user.token = token;

            //user
            return res.status(200).json(user);
        }

        return res.status(400).send("Invalid Credencials")
    } catch (error) {
        console.log({ message: error });
    }
}

module.exports = {
    CreateUser,
    RegisterUser
};