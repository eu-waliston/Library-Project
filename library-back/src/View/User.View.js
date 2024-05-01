const express = require("express")

let UserRouter = express.Router()

const {
    CreateUser,
    RegisterUser
} = require("../Controller/User.Controller")

UserRouter.get("/magic-library/api/v1/register", CreateUser)
UserRouter.post("/magic-library/api/v1/login", RegisterUser)

module.exports = UserRouter;