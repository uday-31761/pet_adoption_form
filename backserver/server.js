const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(express.json())
app.use(cors())
const uri = "mongodb+srv://vuk:vuk2005@cluster0.dpydryb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
client.connect();
const db = client.db("sign-up");
const col = db.collection("user");

app.post('/insert',(request,response) => {
  response.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
  console.log(request.body)
  col.insertOne(request.body)
  console.log("Documents Inserted");

})


app.listen(8081)
//localhost:8081
console.log("server started")