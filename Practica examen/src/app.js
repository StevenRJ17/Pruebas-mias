const express = require('express');
const app = express();
const dbConection = require('./database/config');
require('dotenv').config();
const port = process.env.PORT;
const categoriaRouter = require('./routes/categoria')

//middleware
app.use(express.json());
app.use('/api', categoriaRouter )

app.get('/', (req, res)=>{
    res.send('ruta api funcionando')
})

dbConection();


app.listen(port, ()=>
console.log(`Server corriendo en el puerto ${port}`) )

