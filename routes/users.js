const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const Users = express.Router();

const dbo = require("../db/conn");


Users.route("/users/login/:username/:password").get((req, res) => {
    let db_connect = dbo.getDb();

    const query = {
        username: req.params.username,
        password: req.params.password
    };

    db_connect.collection("Users").find(query).toArray((err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


Users.route("/users/register").post((req, res) => {
    let db_connect = dbo.getDb();

    const newUser = {
        username: req.body.username,
        password: req.body.password,
        tasks: []
    };

    db_connect.collection("Users").insertOne(newUser, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


Users.route("/users/:id/addtask").post((req, res) => {
    let db_connect = dbo.getDb();
    let query = { _id: ObjectId(req.params.id)}
    /*
    task:
    {
        description: "",
        date: [startDate, dueDate],
        status: "" or 0.0-1.0 ?
    }
    */

    const newTask = {
        // append an elmenet to an array
        $push: { 
            tasks: {
                projectId: req.body.projectId,
                owners: req.body.owners,
                task: req.body.task
            }
        }
    };

    db_connect.collection("Users").updateOne(query, newTask, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});



Users.route("/users/:id/deletetask").put((req, res) => {
    let db_connect = dbo.getDb();
    let query = { _id: req.params.id };


});


module.exports = Users;