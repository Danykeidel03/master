const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const connectBD = async () => {
    try{
        await mongoose.connect('mongodb+srv://danykeidel03:Bo63fUk2@cluster0.yc5wo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Conectado correctamente')
    }catch (e) {
        console.log('Database connection error: ', e)
        process.exit(1)
    }
}

module.exports = connectBD