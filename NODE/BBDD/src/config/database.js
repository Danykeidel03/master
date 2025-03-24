const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const connectBD = async () => {
    try{
        await mongoose.connect('mongodb+srv://danykeidel03:<db_password>@cluster0.yc5wo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Conectado correctamente')
    }catch (e) {
        console.log('Database connection error: ', e)
        process.exit(1)
    }
}