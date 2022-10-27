'use strict'

//CONFIGURACIONES CON EXPRESS

var express=require('express');
var bodyParser=require('body-parser');

var app=express();


//CARGAR RUTAS

var user_routes=require('./routes/user');




//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//RUTAS
app.use('/api',user_routes);

//EXPORTAR
module.exports= app;