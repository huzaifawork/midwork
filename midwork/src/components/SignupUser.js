// // SignupComponent.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { url } from '../services/api';


// const SignupComponent = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${url}//users/signup`, { data: formData });

//       console.log('User registered successfully:', response.data.user);
//       // Redirect to login page after successful signup
//       navigate('/login');
//     } catch (error) {
//       console.error('Error registering user', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         {/* ... (unchanged code) ... */}

//         <div className="form-group">
//           <label className="text-black">Username:</label>
//           <input
//             type="text"
//             name="username"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label className="text-black">Email:</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label className="text-black">Password:</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label className="text-black">First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label className="text-black">Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupComponent;

