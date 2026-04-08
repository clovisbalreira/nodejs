// incluir as bibliotecas
// gerencia as requisições, rotas e urls, entre outra funcionalidades

const express = require('express')

// utilizado para manipular as rotas da aplicação
const router = express.Router()

// criar a rota da pagina inicial
application.get('/', (req, res) => {
    res.send('Pagina inicial')
})

//export
module.exports = router