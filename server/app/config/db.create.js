const mysql = require("mysql2")

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "sscssc",
    database : ""
})

con.connect((error)=>{
    if(error) throw error
    console.log("Database was create successfully")

    const sql = "CREATE DATABASE transitiondb"

    con.query(sql,(err,res) =>{
        if(err) throw err
        console.log(res)
    })

    con.end
})