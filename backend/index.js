const express = require("express");
const cors = require('cors')
const { connectToDb, getDb} = require("./db");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())

let db;
connectToDb((err)=>{
    if (!err) {
        app.listen(PORT, (err)=>{
            err? console.log(err) : console.log(`Listening port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`DB connection error: ${err}`);
    }
});

app.get("/cars", (req, res)=>{
    const cars = [];
    db
    .collection("cars")
    .find()
    .forEach((car)=>cars.push(car))
    .then(()=>{
        res.status(200).json(cars);
    })
    .catch(()=>{
        res.status(500).json({error: "Something goew wrong..."})
    })
})


