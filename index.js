// var mysql = require('mysql2');

// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'test'
// });

// connection.connect(function(err){
//     if(err) {
//         throw err;
//     }
//     else{
//         console.log('connected to mysql server');
//     }
// })



// connection.query(`select * from test.new_table`,(err,res)=>{
//     if(err) throw err;

//     console.log(res)
// })

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();


const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root', 
    password:'root', 
    database:'test'  
}); 

connection.connect(function(err){
    if(err) throw err;

    console.log('connected')
})

// connection.query(`select * from test.new_table`,(err,res)=>{
//     if(err) throw err;

//     console.log(res)
// })

connection.query("SELECT * FROM test.userDetails",(err,res)=>{
    if(err) throw err;

    console.log(res)
})