// import { faker } from '@faker-js/faker';

// function generateData(){
//     console.log(faker.person.fullName()); 
//     console.log(faker.location.state());  
//      console.log(faker.internet.email());
//      console.log(faker.date.past()); 
     
// }
// generateData();

import express from 'express';
import _ from 'underscore'; 
import morgan from 'morgan';


var app = express();
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded());

app.set("view engine","ejs");
app.set("view engine","pug");
app.set("views","views"); 

app.get("/", function(req, res){
 res.send("Test response from our web app");
}); //route format: app.method(path, callback)

app.get("/test",(req,res)=>{
    res.send("Responose from test route");
});

app.get("/number",(req,res)=>{
    let num = _.random(1,100);
    res.send("A generated random number is: "+num);
});
 
//hello route for GET method 
app.get("/hello", function(req, res) {
const html =
`<h1>Response is coming from hello route using GET method</h1>
<h2>Hello, ${req.query.name}!</h2>
<p>You are ${req.query.age} years old.</p>`;
res.send(html);
});

//hello route for POST method 
app.post("/hello", function(req, res) {
// const html =
// `<h1>Response is coming from hello route using POST method</h1>
// <h2>Hello, ${req.body.name}!</h2>
// <p>You are ${req.body.age} years old.</p>`;
// res.send(html);
const student = {name:req.body.name, age:req.body.age}; 
res.render("index.pug",student);
});

app.get("/user/:username",(req,res)=>{
res.send("Hello, "+req.params.username+" welcome to web programming");
});

app.get("/user/:username/:userid",(req,res)=>{
res.send("Hello, "+req.params.username+ " with user ID: "+req.params.userid+" welcome to web programming");
});

app.get("/home", function(req, res) {
//res.send("Test response from our web app");
res.render("home.ejs");
});


app.post("/register",(req,res)=>{
let name = req.body.name; 
res.render("index.ejs",{name:name});
});

app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
