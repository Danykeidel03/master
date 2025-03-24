const express = require('express')
const app = express()
const connectBD = require('./src/config/database')

try{
    await connectBD()
    app.listen(3000, () => {
        console.log('puerto 3000')
    })
} catch (e){
    console.log('No se ha podido levantar el servidor')
}