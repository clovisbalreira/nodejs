const http = require('http')
const express = require('express')
const aplicacao = express()
const servidorHttp = http.createServer(aplicacao)
const io = require('socket.io')(servidorHttp)
aplicacao.use(express.static('public'))
io.addListener('connection', (socket) =>{
    console.log('um usuario conectou')
    socket.addListener('nova Mensagem', (msg) => {
        io.emit('nova mensagem', msg)
    })
})
servidorHttp.listen(3000)
//servidorHttp.listen(3000, '192.168.1.105')


// 192.168.1.105