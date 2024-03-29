const express = require('express') //Importa framework de roteamento
const bodyParser = require('body-parser') //Importa verificador de dados do corpo de solicitações HTTP.
const corsOptions = require('./cors') //Importa o cors
const http = require ('http')

const router = require('./routes') //Importa as rotas
const { setuptWebSocket } = require('./websocket')

//Ativa o express
const app = express()
const server = http.Server(app)

setuptWebSocket(server)

//Ativa a política de segurança
app.use(corsOptions)

//Analisar dados de formulários HTML com a codificação application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({extended: false}))

//Analisar dados JSON enviados em solicitações HTTP.
app.use(bodyParser.json())

//Usa as rotas definidas
app.use('/', router)

//Escutar a porta 3333
server.listen('3030', () => {
    console.log('Server is UP')
})