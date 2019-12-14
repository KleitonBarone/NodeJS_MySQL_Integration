//Imports
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    //Models
    const Post = require('./models/Post')

//Routs
app.get("/", function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('index', {posts: posts})
    })
    
})

app.get("/cadastrar", function(req, res){
    res.render('cadastro')
})

app.post("/add", function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Ocorreu um erro: " + erro)
    })
})

app.get("/deletar/:id", function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Esta Postagem não existe")
    })
})



//Server
app.listen(8081, function(){
    console.log("Localhost rodando na porta 8081")
})