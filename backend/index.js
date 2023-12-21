 
// import products from "./routes/AddingProducts.js";
// // import userRoutes from './routes/AddingUser.js';
// // index.js
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import UserModel from "./models/AddingUser.js";
// import jwt from 'jsonwebtoken';

// const app = express();
// // index.js (server) 
// const url = 'mongodb+srv://mhuzaifatariq7:luckynumber7@cluster0.mjqk6et.mongodb.net/your-database-name?retryWrites=true&w=majority';
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('connected to the database'))
// .catch(()=> console.log('not conncted'));
 
// app.listen(5000); 
// // app.use(cors({
// //     origin: "https://midwork-frontend.vercel.app", // Update to your frontend URL
// //     methods: ["POST", "GET","PUT","DELETE"],
// //     credentials: true
// //   }));
// app.use(cors);
// app.get("/",(req,res)=>{
//   res.json("Hello");
// }) 


// app.post('/signup', async (req, res) => {
//   console.log('reached there')
//   const { username, email, password, firstName, lastName } = req.body.data;

//   try {
//     const newUser = new UserModel({ username, email, password, firstName, lastName });
//     await newUser.save();

//     // Generate a JWT token on signup
//     const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: '1h' });

//     res.status(201).json({ message: 'User created successfully', user: newUser, token });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// });

// // Login Route
// app.post('/login', (req, res) => {
//   // Add logic for login here (verify credentials, generate token, etc.)
//   // For simplicity, we'll just return a message for now.
//   res.json('Login route - Hello');
// });


// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', products);



import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/AddingUser.js';
import jwt from 'jsonwebtoken';
import UserModel from "./models/AddingUser.js";
import products from "./routes/AddingProducts.js";


const app = express();

// Middleware setup
app.use(cors({
         origin: "https://midwork-frontend.vercel.app", // Update to your frontend URL
         methods: ["POST", "GET","PUT","DELETE"],
         credentials: true
       }));
    
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const url = 'mongodb+srv://mhuzaifatariq7:luckynumber7@cluster0.mjqk6et.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to the database'))
    .catch(() => console.log('not connected'));


app.use('/', products);
app.use('/',userRoutes);