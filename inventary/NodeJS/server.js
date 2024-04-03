const mysql = require('mysql');
const usersRoutes = require('../routes/userRoutes');
const express = require('express'); 
const app = express(); 
const http = require('http'); 
const server = http.createServer(app); 
const logger = require('morgan'); 
const cors = require('cors'); 

/** 
* Importar rutas 
*/ 
const users = require('./routes/userRoutes'); 
const port = process.env.PORT || 3001;
 
app.set('port', port); 
/** 
* LLamando las rutas 
*/ 

usersRoutes(app);

//direccion ip V4 de la maquina, consultar con ipconfig 
server.listen(3001, '192.168.0.15' || 'localhost', function() { 
    console.log('Aplicación de NodeJS ' + process.pid + ' inicio en el puerto ' + port); 
}); 
 
app.get('/', (req, res) => { 
    res.send('Ruta raiz del Backend'); 
}); 
 
//Error handler  
app.use((err, req, res, next) => { 
console.log(err); 
res.status(err.status || 500).send(err.stack); 
});  