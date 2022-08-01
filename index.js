import express, { request } from "express";
import bodyParser from "body-parser";
import fs from "fs";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const app = express();
const port = 6000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/tv_shows', (req, res) => {
    fs.readFile('./tv_shows.json', function(err, data) {
        if (err) return res.status(500).send(err);

        res.write(data);
        return res.send();
    });;
});

// app.listen(port, () => {
//     console.log('Server started!');
// });

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://alibinauanov:alesh2004@cluster0.9pohocs.mongodb.net/?retryWrites=true&w=majority');
        app.listen(port, () => {
            console.log("ura", port);
        });
    } catch (e) {
        console.log("error", e);
    }
};

start();