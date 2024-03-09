import React, { useState } from 'react';
const AccountPage = () => {
  // Assuming you have some user data from an authentication context or API
  const [userData, setUserData] = useState({
    username: 'Uday Kiran',
    email: 'ukiran@gmail.com',
    // Add more user data as needed
  });

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session, redirect to login)
    console.log('Logout logic goes here');
  };

  return (
    <div>
      <h2 align="center">Account Page</h2>
      <div align="center">
        <strong>Username:</strong> {userData.username}
      </div>
      <div align="center">
        <strong>Email:</strong> {userData.email}
      </div>
      {/* Add more user data display as needed */}
      <div align="center">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AccountPage;