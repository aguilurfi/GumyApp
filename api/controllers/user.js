'use strict'

var User=require('../models/user'); //cargamos el modelo usuario

function pruebas(req,res){
    res.status(200).send({
        message:' ESTAS EN LA FUNCION PRUEBAS...'
    });

}

module.exports={
    pruebas
}