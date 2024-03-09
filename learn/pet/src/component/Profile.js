import React from 'react';
// import './style.css'; // Make sure to import your CSS file

const Profile = () => {
  return (
    <div style={{ backgroundColor: '#B6C4B6' }}>
      <h2 style={{ textAlign: 'center', color: 'red' }}>Student Information System</h2>
      <hr style={{ color: 'black' }} />
      <hr style={{ color: 'black' }} />

      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="" target="_blank">Profile</a></li>
          <li><a href="" target="_blank">Logout</a></li>
        </ul>
      </nav>
      <br /><br />
      
      <p style={{ textAlign: 'center', fontSize: '15pt', fontWeight: 'bold' }}>My Profile</p>
      <div className="card" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', maxWidth: '300px', margin: 'auto', textAlign: 'center', fontFamily: 'arial', border: '10px solid black', padding: '20px' }}>
        <img src={require('./images/uday.jpg')} alt="Image Here" width="100%" /><br />
        <h3>ID: 2200031761</h3>
        <h3>NAME: V H V N J UDAY KIRAN</h3>
        <h4>CSE(H) - B.Tech. - 2</h4>
        <address>Tenali, AP, India</address>
        <br />
        <i>2200031761@kluniversity.in</i><br />
        <i>9052151617</i>
      </div>
    </div>
  );
};

export default Profile;
