//importar time zone
//require('dotenv').config()
/* console.log("ola Mundo!")
var client = "clovis"
console.log("cliente: " + client)

var valProduct = 100;
var valDiscount = 37;

var funcDiscount = require("./modules/calDiscount.js")
var finalValue = funcDiscount(valProduct, valDiscount)
console.log("Valor do produto com desconto : R$ " + finalValue) */

//Utilizando http
/* const http = require('http')
const server = http.createServer((req,res) => {
    res.end("pagina inicial do site")
})
//const hostName = '127.0.0.1'
//const porta = 8080

server.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
}) */

// usando o express
const express = require('express')
const app = express()

//criar rotas da pagina
app.get('/', (req, res) => {
    //res.send('Pagina Inicial')
    //Carregar o arquivo HTML
    res.sendFile( __dirname + '/src/index.html')
})

app.get('/sobre-empresa', (req, res) => {
    //res.send('Pagina sobre empresa')

})

app.get('/contato', (req, res) => {
    res.send('Pagina contato')
})

//iniciando servidor
app.listen(8080, () => {
    console.log('Servidor iniciado')
})

/* const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'celke '
})

connection.connect((err) => {
    console.log('conexão com sucesso' )
})

/* connection.query('SELECT * FROM user', (err, rows, fields) => {
    if(!err){
        console.log('resultado' , rows)
    }else{
        console.log('erro')
    }
}) */

/*connection.query("INSERT INTO USER ( name , email) VALUES ('cesar','ll')", (err, result) => {
    if(!err){
        console.log('resultado' , rows)
    }else{
        console.log('erro')
    }
}) */

// gerencia as requisições, rotas e URLs, entre outra funcionalidades
/* const express = require('express')

// chama a função express
const app = express()

const home = require('./controllers/home.js')
//criar rotas da pagina
app.use('/', home )

//iniciando servidor
app.listen(8080, () => {
    console.log('Servidor iniciado')
})
 */