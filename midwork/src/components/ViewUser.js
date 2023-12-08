// // ViewUserPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ViewUserPage = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users/profile');
//         setUserData(response.data.user || null);
//       } catch (error) {
//         console.error('Error fetching user data', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   let content = null;

//   if (userData) {
//     content = (
//       <table className='table table-bordered table-info'>
//         <thead>
//           <tr>
//             <th className="text-warning">Field</th>
//             <th className="text-warning">Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(userData).map(([key, value]) => (
//             <tr key={key}>
//               <td className='text-danger'>{key}</td>
//               <td className='text-danger'>{value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   } else {
//     content = <p>Loading user data...</p>;
//   }

//   return (
//     <div>
//       <h2>View User Page</h2>
//       {content}
//     </div>
//   );
// };

// export default ViewUserPage;
