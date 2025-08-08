import express from "express"
import multer from "multer";
//import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postController.js";

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

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({dest: "./uploads", storage})
// linix ou mac
//const upload = multer({dest: "./uploads"})

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", (req, res) => {
        res.status(200).json(posts);
    });
    app.post("/posts", (req, res) => {
        const { descricao, imagem } = req.body;

        if (!descricao || !imagem) {
            return res.status(400).json({ erro: "Descrição e imagem são obrigatórios." });
        }

        const novoPost = {
            id: posts.length + 1,
            descricao,
            imagem
        };

        posts.push(novoPost);

        res.status(201).json(novoPost);
    });
    app.post("/upload", upload.single("imagem"), () => {

    }) 
};

/*const routesBanco = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/posts", uploadImagem);
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostId(req.params.id);
    res.status(200).json(posts[index]);
});*/

export default routes;