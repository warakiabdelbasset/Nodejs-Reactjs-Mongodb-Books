const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors=require('cors')


app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');
const booksRoute = require('./routes/books');

//Midelleware
app.use('/posts',postsRoute);
app.use('/Books',booksRoute);
//Routes

app.get('/',(req,res)=>{
res.send("we are home");
});


//connect MongoDB 
mongoose.connect(process.env.DB_CONNECTION,
 {useNewUrlParser: true ,useUnifiedTopology: true },
 console.log('connected to database .....'));

//Listening to the server
app.listen(3000)