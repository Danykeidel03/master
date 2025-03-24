const express = require('express')
const app = express()
const apiRouter = require('./routes/homeRoutes')
const userRoutes = require('./routes/userRouter')
const cors = require('cors') 
const nokMiddleware = require('./middlewares/nokMiddleware');
const nextMiddleware = require('./middlewares/nextMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');


//Parsear de forma automatica en JSON
app.use(express.json())
app.use(cors())
//Definimos enrutadores
app.use('/api', apiRouter)
app.use('/users', userRoutes)
app.use('/prueba', nextMiddleware)

app.use('/prueba',(req, res) => {
    res.send('Respuesta final')
})

app.use(errorMiddleware)
app.use(nokMiddleware)

app.listen(5000, () => {
    console.log('puerto 5000')
})