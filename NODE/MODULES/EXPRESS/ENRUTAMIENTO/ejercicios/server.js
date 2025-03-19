const express = require('express')
const app = express()
const apiRouter = require('./routes/homeRoutes')
const userRoutes = require('./routes/userRoutes')


//Parsear de forma automatica en JSON
app.use(express.json())

//Definimos enrutadores
app.use('/api', apiRouter)
app.use('/registro', userRoutes)



app.listen(3000, () => {
    console.log('puerto 3000')
})