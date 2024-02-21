//console.log("hello cabeça de gelo")
// IMPORTANDO EXPRESS
const express = require('express')

//criando objeto express
const app = express();

//resgatando dados da requisição
app.get('/',(req,res)=> {
    str = "essa é a resoista di netidi GET =>"
    res.send(str);
    
    res.end();
})

//numero da porta
const PORT = process.env.PORT ||5001;


// executar o servidor unicode
app.listen(PORT, console.log(
    `server started on port ${PORT}`));



    console.log("falow");
