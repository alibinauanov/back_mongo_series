import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const connect = () => {
    const url = 'mongodb+srv://alibinauanov:alesh2004@cluster0.9pohocs.mongodb.net/tvshow_db?retryWrites=true&w=majority';
    mongoose.connect(url, (err) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log('Mongo connected');
    });
}
connect();

const app = express();
const db = mongoose.connection;
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.post("/post_name",  (req, res) => {
    const hours = req.body.hours;
    const period = req.body.period;
    const category = req.body.category;
    const pattern = new RegExp('/' + category + '/');
    console.log(category, pattern)

    db.collection('tvshow_collection', async function (err, collection) {
        console.log(await collection.find({}).limit(10))});
        console.log("hrello");
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})