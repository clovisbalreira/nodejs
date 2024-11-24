import express from "express"
import multer from "multer"
import { listarPosts, postarNovoPost, uploadImagem, atualizaNovoPost } from "../controllers/postsControllers.js";
import cors from "cors"
/* 
codigo para windows
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage}) */

const corsOptions = {
    origin: "http://localhost:8000",
    optionSuccessStatus: 200
}
const upload = multer({dest:"./uploads"})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions))
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizaNovoPost)
}

export default routes;


/* function buscarPostPorID(id){
    const db = conexao.db("instabits")
    const colecao = db.collection("posts")
    return colecao.findIndex((post) => {
        return post._id === Number(id)
    })
}

app.get("/posts/:id", (req,res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
}); */
