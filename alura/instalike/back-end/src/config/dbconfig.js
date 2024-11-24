import { MongoClient } from "mongodb";

export default async function  conectarAoBanco(stringConexao) {
    let mongoCliente;
    try{
        mongoCliente = new MongoClient(stringConexao);
        console.log("Conectando ao cliente do banco de dadods...");
        await mongoCliente.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso");
        return mongoCliente
    } catch(erro){
        console.log("Falha na conexão com banco", erro);
        process.exit();
    }
}