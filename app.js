const express = require('express');
const app = express();
const puerto = 80;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});