import React, { useState } from 'react';
import "../css/delpro.css"
function Minus() {
  const [reason, setReason] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (reason.trim() === '') {
      alert('Please provide a reason for deletion.');
    } else {
      // Simulate the deletion process - you should make an API call to your server for actual deletion.
      // Here, we're just updating the state to simulate a successful deletion.
      setIsDeleted(true);
    }
  };

  const handleUndo = () => {
    // Simulate the undo process - you should implement this logic according to your needs.
    setIsDeleted(false);
  };

  return (
    <div>
      {isDeleted ? (
        <div>
          <p>Product has been deleted.</p>
          <button onClick={handleUndo}>Undo</button>
        </div>
      ) : (
        <div>
          <h1>Product Name</h1>
          <p>Product description...</p>
          {/* Display other product details here */}
          <input id='in'
            type="text"
            placeholder="Reason for deletion"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <button onClick={handleDelete}>Delete</button>
          <button >Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Minus;