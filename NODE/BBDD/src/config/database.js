const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const connectBD = async () => {
    try{
        await mongoose.connect('')
        console.log('Conectado correctamente')
    }catch (e) {
        console.log('Database connection error: ', e)
        process.exit(1)
    }
}