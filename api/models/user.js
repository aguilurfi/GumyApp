'user strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//ESQUEMA PARA EL MODELO USUARIO
var UserSchema=Schema({

    apodo: String,
    name: String,
    email: String,
    password: String
    
});