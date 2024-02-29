const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

//simulando o banco de dados

let pessoas = [
    { id:1,nome:'Humano 1'},
    { id:2,nome:'Humano 2'},
    { id:3,nome:'Humano 3'}
];

// Rota para obter TODOS os humanos no get
app.get("/pessoas", (req,res)=> {
    res.json(pessoas);
})

// rota para adicionar um humano novo usando o POST
app.post('/post-pessoinha',(req,res)=>{
    const newBook = req.body;
    pessoas.push(newBook);
    res.json(newBook);
});

app.put("/update-pessoinha/:id",(req,res)=>{
    const pessoinhaId = parseInt(req.params.id);
    const newnome = req.body.nome;
    const pessoinhaToUpdate = pessoas.find(pessoinha => pessoinha.id === pessoinhaId);
    if(pessoinhaToUpdate){
        pessoinhaToUpdate.nome = newnome;
        res.json(pessoinhaToUpdate);

    }else{
        res.status(404).send("Humano Não encontrado")
    }
})

app.delete("/delete-pessoinha/:id",(req,res) =>{
    const pessoinhaId = parseInt(req.params.id);
    const indexToRemove = pessoas.findIndex(pessoinha =>pessoinha.id ===pessoinhaId);
    if(indexToRemove!== -1){
        const removedpessoinha = pessoas.splice(indexToRemove,1);
        res.json(removedpessoinha[0]);
    }else{
        res.status(404).send("Humano não encontrado");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})