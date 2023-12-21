// // routes/user.routes.js
// import express from 'express';
// import { signup, login } from '../controller/AddingUser.js';
// import auth from '../Middleware/auth.js';

// const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);
// router.get('/dashboard', auth, (req, res) => {
//   // Only accessible with a valid token and authentication
//   res.status(200).json({ message: 'Dashboard accessed successfully', user: req.userId });
// });

// export default router;

