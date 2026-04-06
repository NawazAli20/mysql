import mysql from 'mysql';


let con = mysql.createConnection({
host:'localhost',
user:'root',
database: 'DB1',
password:""
});

con.connect((err)=>{
    if(err) throw err; 
    console.log("Database is connected");
})

export default con; 
