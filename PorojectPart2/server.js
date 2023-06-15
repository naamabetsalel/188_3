// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const cookie = require('cookie-parser');
const port = 2023 ;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookie());

//routing 
app.get('/', (req,res)=>{
    //res.send("PROJECT");
    res.sendFile(path.join(__dirname, "views/HomePage.html"))
});

app.get('/services', (req,res)=>{;
res.sendFile(path.join(__dirname, "views/services.html"))})

app.get('/page1', (req,res)=>{;
    res.sendFile(path.join(__dirname, "views/page1.html"))})




// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});
