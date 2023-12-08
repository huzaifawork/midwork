// Assuming you're using React as an example

import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios

const DeleteComponent = ({ userId }) => {
  const [isDeleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);

      // Make an API call to delete the user
      await axios.delete(`/api/users/${userId}`); // Adjust the API endpoint accordingly

      // Handle successful deletion (e.g., show a message, update state)
      console.log('User deleted successfully');

      // Optionally, you can trigger a callback or update state in the parent component
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error deleting user:', error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete User'}
      </button>
    </div>
  );
};

export default DeleteComponent;
