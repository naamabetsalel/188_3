const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const CRUD = require('./DB/CRUD');
const sql = require("./DB/web")
const port = 3000;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'pug');


//routing 


app.get('/reviews', (req,res)=>{
res.render("reviews")});

app.get('/page1', (req,res)=>{
res.render("page1")});

app.get('/', CRUD.createTables);
app.get('/newReview', CRUD.newReview);
app.get('/login', CRUD.login);
app.get('/createNewUser', CRUD.createNewUser);
app.get('/showSubject', CRUD.showSubject);
app.get('/checkBestSubject', CRUD.checkBestSubject);
app.get('/dropTable', CRUD.dropTable);
app.get('/changeTable', CRUD.changeTable);





// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});