'use strict'

//CONFIGURACIONES CON EXPRESS

var express=require('express');
var bodyParser=require('body-parser');

var app=express();


//CARGAR RUTAS

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//RUTAS
app.get('/', (req,res)=>{
    res.status(200).send({message: 'BIENVENIDOS A GUMYAPP...'});
});

//EXPORTAR
module.exports= app;