const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const pass = "oZNgbdJuVaTlPvjg";

const uri = "mongodb+srv://expressUser:oZNgbdJuVaTlPvjg@cluster0.9cu5v.mongodb.net/personaldb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/users' , (req, res)=>{
    res.send('hello mama')
})


 


client.connect(err => {
  const collection = client.db("personaldb").collection("mytodo");
 console.log('data base connect')
  client.close();
});
   
   

app.listen(4500 , ()=>{
    console.log('web server listening on port 4500')
})