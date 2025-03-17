const express = require('express')
const app = express()
const apiRouter = require('./routes/homeRoutes')
const registroRouter = require('./routes/registroRouter')


//Parsear de forma automatica en JSON
app.use(express.json())

//Definimos enrutadores
app.use('/api', apiRouter)
app.use('/registro', registroRouter)



app.listen(3000, () => {
    console.log('puerto 3000')
})