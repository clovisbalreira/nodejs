import Joi from 'joi'
export const modeloTime = Joi.object({
    nome: Joi.string().min(4).required(), 
    sigla: Joi.string().length(3).required(), 
    pontos: Joi.number().default(0), 
    vitorias: Joi.number().default(0),
    empates: Joi.number().default(0), 
    derrotas: Joi.number().default(0), 
    golsMarcados: Joi.number().default(0),
    golsSofridos: Joi.number().default(0), 
    saldoDeGols: Joi.number().default(0),
})

export const modeloAtualizacaoTime = Joi.object({
    nome: Joi.string().min(4), 
    sigla:Joi.string().length(3), 
    pontos:Joi.number().min(0), 
    vitorias:Joi.number().min(0),
    empates:Joi.number().min(0), 
    derrotas:Joi.number().min(0), 
    golsMarcados:Joi.number().min(0), 
    golsSofridos:Joi.number().min(0),
    saldoDeGols:Joi.number().min(0),
}).min(1)