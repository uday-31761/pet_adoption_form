import React from 'react';
import axios from 'axios';
import '../App.css';

import background from './images/petbackground.jpg'; // Import the background image

function Login() {
  function handleForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);  
    const email = data.get("email");
    const password = data.get("password");

    axios.post("http://localhost:8081/login", {
      email: email,
      password: password
    }).then((response) => {
      alert(response.data); // or handle the response accordingly
    }).catch((error) => {
      alert("Login failed: " + error.response.data);
    });
  }

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%', // Adjust the width as needed
  };

  return (
    <div style={backgroundStyle} className="App-login">
      <header>
        <div align="center">
          {/* Remove the <img> tag */}
        </div>
      </header>
      <p align="center" style={{ color: 'black', fontStyle: 'italic' }}>Enter Credentials</p>
      <form align="center" onSubmit={handleForm} style={{ color: 'white' }}>
        <span style={{ fontStyle: 'italic', color: 'white' }}>Email:</span> <input type="text" placeholder='' name="email" />
        <br />
        <span style={{ fontStyle: 'italic' }}>Password:</span> <input type="password" placeholder='' name="password" />
        <br /><br />
        <input type="submit" value="Login" />&nbsp;&nbsp;&nbsp;
        <input type="reset" value="Clear" />
      </form>
    </div>
  );
}

export default Login;
