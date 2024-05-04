const express = require("express")

let UserRouter = express.Router()

const {
    CreateUser,
    RegisterUser,
    GetUser,
    GetAllUsers,
    UpdateUser,
    DeleteUser
} = require("../Controller/User.Controller")

UserRouter.get("/magic-library/api/v1/register", CreateUser)
UserRouter.post("/magic-library/api/v1/login", RegisterUser)
UserRouter.get("/magic-library/api/v1/get-a-user", GetUser)
UserRouter.get("/magic-library/api/v1/get-all-users", GetAllUsers)
UserRouter.put("/magic-library/api/v1/update-a-user", UpdateUser)
UserRouter.delete("/magic-library/api/v1/login", DeleteUser)

module.exports = UserRouter;