const express = require("express");

const taskRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


taskRoutes.route("/project/:id/task").get((req, res) => {
    let db_connect = dbo.getDb();
    let query = { _id: ObjectId( req.params.id ) };
    db_connect.collection("ProjectList").find({}).toArray((err, result) => {
        if (err) throw err;
        res.json(result);
    })
});


taskRoutes.route("project/:id")


module.exports = taskRoutes;