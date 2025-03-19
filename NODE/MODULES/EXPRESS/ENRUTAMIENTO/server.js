const express = require('express')
const app = express()
const apiRouter = require('./routes/homeRoutes')
const registroRouter = require('./routes/registroRouter')

//middleware de terceros
const cors = require('cors')

//evitar conflictos cors
app.use(cors());

//Parsear de forma automatica en JSON
app.use(express.json())

//Definimos enrutadores
app.use('/api', apiRouter)
app.use('/registro', registroRouter)

app.use('/', (request, response, next) => {
    console.log('primer middleware');
    next()
})

app.use('/about', (request, response, next) => {
    console.log('primer middleware');
    next()
})

app.use('/', (request, response, next) => {
    console.log('primer middleware');
    response.end()
})

// middleware manejador de urls erroneas

app.use((request,response) => {
    response.status(404).json({succes: 'NOK', message: 'Ruta erronea'});
    //esto si falla pq no encuentra la ruta, salta aqui
})

app.listen(3000, () => {
    console.log('puerto 3000')
})