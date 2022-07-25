
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*
const mysql = require("mysql");

var _db = mysql.createPool({
    host: "localhost",
    user: process.env.DataAccess[user],
    password: process.env.DataAccess[password],
    database: "test"
});
*/

var _db;

module.exports = {
    connectToServer: function (callback) {
        // MongoClient's .connect method ? db.db
        client.connect(function (err, db) {
            if (db)
            {
                _db = db.db("TMT");
                console.log("successfully connect to MongoDB");
            }

            return callback(err);
        })
    },

    getDb: function () {
        return _db;
    }
};

