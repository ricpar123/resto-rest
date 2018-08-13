const express = require('express');
const Producto = require('../modelos/productos');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// const _ = require('underscore');

app.use(cors());
app.use(bodyParser.json());

app.post('/productos', function(req, res) {
    let body = req.body;


    let producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        codigo: body.codigo

    });




    producto.save((err, prodDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            producto: prodDB
        });
    });
})

module.exports = app;