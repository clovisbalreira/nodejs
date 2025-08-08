import express from "express";
import routes from "./src/routes/postsRoutes.js";

const posts = [
    {
        id: 1,
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Outra foto",
        imagem: "https://placecats.com/millie/400/200"
    },
    {
        id: 3,
        descricao: "Mais uma foto",
        imagem: "https://placecats.com/millie/500/250"
    },
    {
        id: 4,
        descricao: "Foto incrível",
        imagem: "https://placecats.com/millie/600/300"
    },
    {
        id: 5,
        descricao: "Foto divertida",
        imagem: "https://placecats.com/millie/700/350"
    },
    {
        id: 6,
        descricao: "Foto adorável",
        imagem: "https://placecats.com/millie/800/400"
    },
];

const app = express();
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

