
import express from 'express';
import routes from './routes.js';
import morgan from 'morgan';


let app = express();
let port = 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(morgan('dev'));

app.set("view engine","pug");
app.set("views","views"); 

app.use("/",routes);

//start the server
app.listen(port,(err)=>{
    if(err) throw err; 
    console.log("Server is listening at port:"+port);
})
 
export default app;