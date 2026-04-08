import con from './connection.js';
import express from 'express';


let router = express.Router();




router.get("/",(req,res)=>{
let q = "select * from student";
con.query(q,(err,results)=>{
    if(err) throw err; 
    //console.log(results);
    //results.forEach((student) => {
     //   console.log(student.ID+"-->"+student.name+"-->"+student.dept_name+"-->"+student.tot_credit);
    //res.send(results);
    //res.json(results);
    res.render("display",{students:results});
    });
});

//Information for a specific student
router.get("/student/:id",(req,res)=>{
let id = req.params.id;
let q = "select * from student where ID=?";
con.query(q,[id],(err,results)=>{
    if(err) throw err;  
    if(results.length==0)
        res.send("No student with ID: "+id+" is found");
    else
        res.send(results);
    });
});

//add a new student
router.post("/add",(req,res)=>{
    let name = req.body.name;
    if(name){
        let q = "insert into student (name) values(?)";
        con.query(q,[name],(err,results)=>{
            if(err) throw err; 
            else
                res.send(results.affectedRows+" student is inserted");
        })
    }else{
        res.send("Enter a student name");
    }
})

//update a student 
router.post("/update",(req,res)=>{
    let name = req.body.name;
    let id = req.body.id;
    if(name && id){
        let q = "update student set name=? where ID=?";
        con.query(q,[name,id],(err,results)=>{
            if(err) throw err; 
            else
                res.send(results.affectedRows+" student is updated");
        })
    }else{
        res.send("Enter a student name and id");
    }
})

//delete a student
router.post("/delete",(req,res)=>{
    let id = req.body.id;
    if(id){
        let q = "delete from student where id=?";
        con.query(q,[id],(err,results)=>{
            //console.log(results);
            if(err) throw err; 
            else if(results.affectedRows==0){
                res.send("No student with ID: "+id+" is found");
            }
            else
                res.send(results.affectedRows+" student is deleted with ID: "+id);
        })
    }else{
        res.send("Enter a student id");
    }
})

export default router;
