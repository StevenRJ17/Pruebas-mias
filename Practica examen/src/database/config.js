const {connect} = require('mongoose');

const dbConection = async () =>{
    try{
        await connect(process.env.MONGOBD_CNN)
        console.log('Conectado a la base de datos correctamente');
    }catch(error){
        console.log('Error de coneccion a la base de datos');
        console.log(error.message)
    }
}

module.exports = dbConection;