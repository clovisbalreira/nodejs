import tabela2024 from "./tabela.js"
import express from 'express'

const app = express()

app.listen(3000, () => console.log('Servidor rodando com sucesso'))

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(tabela2024)
})

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase()
    const time = tabela2024.find(infoTime => infoTime.sigla === siglaInformada)
    if(!time){
        resposta.status(404).send('Não existe na seria A do Brasileirão um time com a sigla informada!')
        return
    }
    resposta.status(200).send(time)
})