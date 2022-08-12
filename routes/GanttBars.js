const express = require("express");

const barRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;       // find ID in mongodb


barRoutes.route("/bar");


module.exports = barRoutes;