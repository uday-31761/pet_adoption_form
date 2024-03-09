const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://vuk:vuk2005@cluster0.dpydryb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("sign-up");
    const col = db.collection("user");

    // Endpoint to handle login requests
    app.post('/login', async (request, response) => {
      const { email, password } = request.body;
      const user = await col.findOne({ email, password });
      
      if (user) {
        response.send('Login successful'); // or you can send some user data back if needed
      } else {
        response.status(401).send('Invalid email or password');
      }
    });

    const PORT = 8082;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();
