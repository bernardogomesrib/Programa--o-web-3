const express = require('express');
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha1234",
    database: "nodecon"
});

app.post('/api/Categorias',(req,res)=>{
    const {nome,descricao} = req.body;
    const SQL = "INSERT INTO Categorias(nome,descricao) VALUES(?,?)";
    connection.query(SQL,[nome,descricao],(err,result) => {
        if(err){

            res.status(500).json({error: 'Erro ao inserir registro!   -   '+err.message});
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});
        }
    });
});
app.delete('/api/Categorias/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Categorias WHERE id = ?';
    connection.query(sql,[id],(err,result)=>{
        if(err){
            console.error("Erro ao excluir registro! "+err.message);
            res.status(500).json({error:"erro ao excluir registro "+err.message});
        }else{
            if(result.affectedRows>0){
                console.log("Registro excluido com sucesso!");
                res.status(200).json({message:'Registro excluido com sucesso!'});
            }else{
                console.log("Registro não encontrado.");
                res.status(404).json({message:"Registro não encontrado"});
            }
        }
    });
});
app.get('/api/Categorias', (req, res) =>{
    const sql = 'SELECT * FROM Categorias';
    connection.query(sql,(err, results) =>{
        if(err){
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    });
});
app.put('/api/Categorias',(req,res) =>{

    const { id,nome,descricao} = req.body;

    const sql = 'UPDATE Categorias SET nome = ?, descricao = ? WHERE id = ?';

    connection.query(sql,[nome,descricao,id],(err,result)=>{
        if(err){
            console.error('Erro ao atualizar registro: '+err.message);
            res.status(500).json({error: "Erro ao atualizar registro - "+err.message});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message:"Registro atualizado com sucesso"});
        }
    });
});
//fim categorias

//produtos
app.get('/api/Produtos', (req, res) =>{
    const sql = 'SELECT * FROM Produtos';
    connection.query(sql,(err, results) =>{
        if(err){
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    });
});
app.post('/api/Produtos', (req, res) => {
    const{ nome,email,endereco,telefone  } = req.body;
    const sql = 'INSERT INTO Produtos(nome,email,endereco,telefone ) VALUES(?,?,?,?,?)';
    console.log(nome,email,endereco,telefone);
    connection.query(sql,[nome,email,endereco,telefone ],(err,result) => {
        if(err){
  
            res.status(500).json({error: 'Erro ao inserir registro!   -   '+err.message});
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});
        }
    });
});
app.put('/api/Produtos',(req,res) =>{

    const { id,nome,email,endereco,telefone} = req.body;

    const sql = 'UPDATE Produtos SET nome = ?, descricao= ?,preco= ?,id_categoria= ?,disponivel = ? WHERE id = ?';

    connection.query(sql,[nome,email,endereco,telefone,id],(err,result)=>{
        if(err){
            console.error('Erro ao atualizar registro: '+err.message);
            res.status(500).json({error: "Erro ao atualizar registro - "+err.message});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message:"Registro atualizado com sucesso"});
        }
    });
});
app.delete('/api/Produtos/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Produtos WHERE id = ?';
    connection.query(sql,[id],(err,result)=>{
        if(err){
            console.error("Erro ao excluir registro! "+err.message);
            res.status(500).json({error:"erro ao excluir registro "+err.message});
        }else{
            if(result.affectedRows>0){
                console.log("Registro excluido com sucesso!");
                res.status(200).json({message:'Registro excluido com sucesso!'});
            }else{
                console.log("Registro não encontrado.");
                res.status(404).json({message:"Registro não encontrado"});
            }
        }
    });
});
//fim produtos
//pedidos

app.get('/api/Pedidos', (req, res) =>{
    const sql = 'SELECT * FROM Peditos';
    connection.query(sql,(err, results) =>{
        if(err){
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    });
});
app.post('/api/Pedidos', (req, res) => {
    const{ id_cliente,data_pedido,status_  } = req.body;
    const sql = 'INSERT INTO Pedidos(id_cliente,data_pedido,status_ ) VALUES(?,?,?)';
    console.log(id_cliente,data_pedido,status_);
    connection.query(sql,[id_cliente,data_pedido,status_ ],(err,result) => {
        if(err){
  
            res.status(500).json({error: 'Erro ao inserir registro!   -   '+err.message});
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});
        }
    });
});
app.put('/api/Pedidos',(req,res) =>{

    const { id,id_cliente,data_pedido,status_} = req.body;

    const sql = 'UPDATE Pedidos SET id_cliente = ?,data_pedido=?,status_ = ? WHERE id = ?';

    connection.query(sql,[id_cliente,data_pedido,status_,id],(err,result)=>{
        if(err){
            console.error('Erro ao atualizar registro: '+err.message);
            res.status(500).json({error: "Erro ao atualizar registro - "+err.message});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message:"Registro atualizado com sucesso"});
        }
    });
});
app.delete('/api/Pedidos/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Pedidos WHERE id = ?';
    connection.query(sql,[id],(err,result)=>{
        if(err){
            console.error("Erro ao excluir registro! "+err.message);
            res.status(500).json({error:"erro ao excluir registro "+err.message});
        }else{
            if(result.affectedRows>0){
                console.log("Registro excluido com sucesso!");
                res.status(200).json({message:'Registro excluido com sucesso!'});
            }else{
                console.log("Registro não encontrado.");
                res.status(404).json({message:"Registro não encontrado"});
            }
        }
    });
});
//fim pedidos
// clientes

app.get('/api/Clientes', (req, res) =>{
    const sql = 'SELECT * FROM Clientes';
    connection.query(sql,(err, results) =>{
        if(err){
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    });
});
app.post('/api/Clientes', (req, res) => {
    const{ nome,email,endereco,telefone  } = req.body;
    const sql = 'INSERT INTO Clientes(nome,email,endereco,telefone ) VALUES(?,?,?,?)';
    console.log(nome,email,endereco,telefone);
    connection.query(sql,[nome,email,endereco,telefone ],(err,result) => {
        if(err){
  
            res.status(500).json({error: 'Erro ao inserir registro!   -   '+err.message});
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});
        }
    });
});
app.put('/api/Clientes',(req,res) =>{

    const { id,nome,email,endereco,telefone} = req.body;

    const sql = 'UPDATE Clientes SET nome=?,email=?,endereco=?,telefone=? WHERE id = ?';

    connection.query(sql,[nome,email,endereco,telefone,id],(err,result)=>{
        if(err){
            console.error('Erro ao atualizar registro: '+err.message);
            res.status(500).json({error: "Erro ao atualizar registro - "+err.message});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message:"Registro atualizado com sucesso"});
        }
    });
});
app.delete('/api/Clientes/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Clientes WHERE id = ?';
    connection.query(sql,[id],(err,result)=>{
        if(err){
            console.error("Erro ao excluir registro! "+err.message);
            res.status(500).json({error:"erro ao excluir registro "+err.message});
        }else{
            if(result.affectedRows>0){
                console.log("Registro excluido com sucesso!");
                res.status(200).json({message:'Registro excluido com sucesso!'});
            }else{
                console.log("Registro não encontrado.");
                res.status(404).json({message:"Registro não encontrado"});
            }
        }
    });
});
// fim clientes

//itensPedidos


app.post('/api/ItensPedido',(req,res)=>{
    const {id_pedido,id_produto,quantidade,preco_unitario} = req.body;
    const SQL = "INSERT INTO ItensPedido(id_pedido,id_produto,quantidade,preco_unitario) VALUES(?,?,?,?)";
    connection.query(SQL,[id_pedido,id_produto,quantidade,preco_unitario],(err,result) => {
        if(err){

            res.status(500).json({error: 'Erro ao inserir registro!   -   '+err.message});
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});
        }
    });
});
app.delete('/api/ItensPedido/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM ItensPedido WHERE id = ?';
    connection.query(sql,[id],(err,result)=>{
        if(err){
            console.error("Erro ao excluir registro! "+err.message);
            res.status(500).json({error:"erro ao excluir registro "+err.message});
        }else{
            if(result.affectedRows>0){
                console.log("Registro excluido com sucesso!");
                res.status(200).json({message:'Registro excluido com sucesso!'});
            }else{
                console.log("Registro não encontrado.");
                res.status(404).json({message:"Registro não encontrado"});
            }
        }
    });
});
app.get('/api/ItensPedido', (req, res) =>{
    const sql = 'SELECT * FROM ItensPedido';
    connection.query(sql,(err, results) =>{
        if(err){
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    });
});
app.put('/api/ItensPedido',(req,res) =>{

    const { id,id_pedido,id_produto,quantidade,preco_unitario} = req.body;

    const sql = 'UPDATE ItensPedido SET id_pedido=?,id_produto=?,quantidade=?,preco_unitario = ? WHERE id = ?';

    connection.query(sql,[id_pedido,id_produto,quantidade,preco_unitario,id],(err,result)=>{
        if(err){
            console.error('Erro ao atualizar registro: '+err.message);
            res.status(500).json({error: "Erro ao atualizar registro - "+err.message});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message:"Registro atualizado com sucesso"});
        }
    });
});

//fim itenspedidos


connection.connect((err) => {
    if(err){
        console.log('Erro ao conectar ao mysql: '+ err.message);
    }else{
        console.log('Conectado ao MySql com sucesso');
    }
})

app.listen(port,() =>{
    console.log(`Servidor iniciado na porta ${port}`);
})