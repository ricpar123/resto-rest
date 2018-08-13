const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },

    precio: {
        type: Number,
        required: [true, 'El precio es necesario']
    },

    codigo: {
        type: String,
        required: [true, 'El codigo es necesario']
    }

});

module.exports = mongoose.model('Producto', productoSchema);