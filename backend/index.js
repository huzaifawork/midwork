 
import products from "./routes/AddingProducts.js";
// import userRoutes from './routes/AddingUser.js';
// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import UserModel from "./models/AddingUser.js";
// import jwt from 'jsonwebtoken';

const app = express();
// index.js (server) 
const url = 'mongodb+srv://mhuzaifatariq7:luckynumber7@cluster0.mjqk6et.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to the database'))
.catch(()=> console.log('not conncted'));
  
app.use(cors({
    origin: "https://midwork-frontend.vercel.app", // Update to your frontend URL
    methods: ["POST", "GET","PUT","DELETE"],
    credentials: true
  }));
app.use(cors);
app.get("/",(req,res)=>{
  res.json("Hello");
}) 



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', products);