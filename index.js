const express = require("express");
const app = express();
app.get('/hola', function (req, res) {
  res.send('Hola Marciano');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});