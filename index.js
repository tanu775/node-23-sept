const express = require('express');
const path = require ('path');
const student = require ('./routes/student')
const app = express();
const connection =  require('./connection')
connection();
app.use(student);
app.set('view engine', 'ejs');    //it tells about the view engine used by node js
app.set('views',path.resolve('./views'));    //it searches render function and goes to views folder

app.listen(3000,(err)=>{
    if(err){
    console.log(err)
    }else{
        console.log('server is running on 3000')
    }
})