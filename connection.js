import mysql from 'mysql';


let con = mysql.createConnection({
host:'localhost',
user:'root',
database: 'CIS393SP26',
password:""
});

con.connect((err)=>{
    if(err) throw err; 
    console.log("Database is connected");
})

export default con; 
