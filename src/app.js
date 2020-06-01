const express = require('express');
const app = express();
const morgan = require('morgan');


// middlewares configurando servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// routers
app.use('/api/index',require('./routes/index'));

app.get('/',(res,req) =>{
	console.log("Hola");
	res.send("Hola");
});

// empezando con el servidor
app.listen(app.get('port'),() => {
	console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});