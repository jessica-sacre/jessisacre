const express = require('express');
require('dotenv').config();




// crear servidor express
const app = express();



// acceso al directorio publico
app.use(express.static('public'));
// rutas



app.use('/api/auth', require('./routes/auth'));



// configg
app.listen(process.env.PORT, () => {
    console.log(`backend corriendo en el puerto ${process.env.PORT}`);
})