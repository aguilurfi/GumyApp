'use strict'



var mongoose= require('mongoose');
var app=require('./app');
var port=3800;

//CONEXION CON BBDD

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/GumyApp',{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("CONEXION REALIZADA CORRECTAMENTE...")

        //CREAMOS SERVIDOR
        app.listen(port,()=>{
            console.log("SERVIDOR CORRIENDO...");
        });
    })
    .catch(err=> console.log(err)); 