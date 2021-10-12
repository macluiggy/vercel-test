const express = require('express');
const router = express.Router();


//este nos permite manejar las rutas de las peticiones, en este caso la ruta root
router.get('/', (req, res) => {
    //console.log(tasks, tasks.status);
    res.json({
        status: 'hola mi llave, ahora esta en tasks.routes.js'
    });
})

module.exports = router