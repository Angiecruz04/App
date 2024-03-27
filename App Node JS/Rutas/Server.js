const express = require ('express');
const app = express();
const http = require ('http');

// creamos el servidor 

const server = http.createServer(app);
const logger = require ('morgan');
const cors = require ('cors');

// importar rutas 
const rutasUser = require ('./rutas/rutasUser');


app.use(logger ('dev'));
app.use(express.json ());
app.use(express.urlencoded({extended: true}));

app.use(logger ());
app.disable('x-powerd-by');

// vamos a crear la primera ruta, llamando la redireccion por get
app.get ('/', (req, res) => {
    res.send('ruta raiz backend')
})

app.get ('/login',(req, res) => {
    res.send ('Esta es la ruta para el login');

});

// ruta de error handler

app.user((err,req,next) =>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);

});

// puerto de la variable de entorno
const port = process.env.PORT || 5000;

// asignaremos el puerto a la aplicacion express
app.set('port',port);

// llamamos la rutas 
rutasUser(app);

// iniciamos el servidor 
server.listen(port, function(){
    console.log('Aplicacion Node.js iniciada en el puerto ' + port);
});