// UserSideView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSideView = () => {
  const [userDetails, setUserDetails] = useState(null);

 // UserSideView.js
// ...

useEffect(() => {
// Profile.js (React frontend)
const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users/profile');
      setUserDetails(response.data.user);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };
    
    fetchUserDetails();
  }, []);
  // ...
  

  return (
    <div>
      <h2>User Side View</h2>
      {userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>Username: {userDetails.username}</p>
          <p>First Name: {userDetails.firstName}</p>
          <p>Last Name: {userDetails.lastName}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserSideView;