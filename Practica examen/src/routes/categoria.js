const {Router} = require('express');
const categoriaSchema = require('../models/categoria');

const router = Router();

//Crear categoria
router.post('/categoria', (req, res)=>{
    const categoria = categoriaSchema(req.body);
    categoria.save().then((data)=> res.json(data)).catch((error)=> res.json({message: error}))
})

//Obtener categorias
router.get('/categoria', (req, res)=>{
    categoriaSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})

//Obtener una categoria especifica
router.get('/categoria/:id', (req, res)=>{
    const { id } = req.params;
    categoriaSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})

//Actualizar categoria
router.put('/categoria/:id', (req, res)=>{
    const { id } = req.params;
    const { nombre } = req.body;
    categoriaSchema
    .updateOne({_id: id}, { $set: {nombre} })
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})

//eliminar categoria
router.delete('/categoria/:id', (req, res)=>{
    const { id } = req.params;
    categoriaSchema
    .remove({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})


module.exports = router;