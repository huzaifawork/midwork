import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import products from './routes/AddingProducts.js';

const app = express();

const url = 'mongodb+srv://mhuzaifatariq7:luckynumber7@cluster0.mjqk6et.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to the database'))
    .catch(() => console.log('not connected'));

app.use(cors({
    origin: "https://midwork-frontend.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Make sure to apply CORS middleware before your routes
app.use('/', products);

// Your other routes...

app.get("/", (req, res) => {
    res.json("Hello");
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
