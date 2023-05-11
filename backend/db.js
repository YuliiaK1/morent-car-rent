let MongoClient = require('mongodb').MongoClient;

const URL = "mongodb+srv://svistaky:47buhili@cluster0.pvylfxu.mongodb.net/carsbox?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
    connectToDb: (cb)=>{
        MongoClient
        .connect(URL)
        .then((client)=>{
            console.log("Connected to MongoDB");
            dbConnection = client.db();
            return cb();
        })
        .catch((err)=>{
            return cb(err);
        })
    },
    getDb:()=> dbConnection,
} 