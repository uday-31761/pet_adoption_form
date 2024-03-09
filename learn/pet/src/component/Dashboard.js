import React from 'react';

const Dashboard = () => {
  const backgroundStyle = {
    backgroundImage: `url("./images/pet.jpeg")`, // Adjust the path if needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height as needed
  };

  return (
    <div style={backgroundStyle}>
      <h3 style={{ textAlign: 'center' }}>Welcome To Dashboard Page</h3>
      {/* Add your dashboard components and content here */}
    </div>
  );
};

export default Dashboard;
