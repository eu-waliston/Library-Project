const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path")
require("dotenv").config();

const API = express();

require("../config/DB-Connection");

//midlewarres
API.use(express.json());
API.use(express.urlencoded({ extended: true }));
API.use(cors());
API.use(helmet());

//EJS
API.use(express.static(__dirname + ".." + 'public'));
API.set('views', path.join(__dirname + ".." + 'public/views'))
API.set('view engine', 'ejs');

//Routes
const RootRouter = require("./View/Root.View");
const UserRouter = require("./View/User.View");
const BookRouter = require("./View/Book.View");
const DOC = require("./View/Doc.View");
API.use("/", RootRouter);
API.use("/", UserRouter);
API.use("/", BookRouter);
API.use("/", DOC);

API.listen(process.env.PORT, () => {
    console.log(`API listening on PORT ${process.env.PORT}`);
})
