const {Schema, model} = require('mongoose');

const productoSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    idCategoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    }
})

module.exports = model('Producto', productoSchema);