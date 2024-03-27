const sequelize = require('../db/db');
const { DataTypes } = require("sequelize");
const Threadd = require('./Thread');
const Answer = require('./Answer');
const User = require('./User');

const Board = sequelize.define('board',{
    id:{
        type:DataTypes.STRING(6),
        primaryKey:true
    },
    nome:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    mensagem:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})


// Definindo associações
Board.hasMany(Threadd, { foreignKey: 'boardId' }); // Um board pode ter muitas threads
Threadd.belongsTo(Board, { foreignKey: 'boardId' }); // Uma thread pertence a um board

Threadd.hasMany(Answer, { foreignKey: 'threadId' }); // Uma thread pode ter muitas respostas
Answer.belongsTo(Threadd, { foreignKey: 'threadId' }); // Uma resposta pertence a uma thread

User.hasMany(Threadd, { foreignKey: 'userId' }); // Um usuário pode ter muitas threads
Threadd.belongsTo(User, { foreignKey: 'userId' }); // Uma thread pertence a um usuário

User.hasMany(Answer, { foreignKey: 'userId' }); // Um usuário pode ter muitas respostas
Answer.belongsTo(User, { foreignKey: 'userId' }); // Uma resposta pertence a um usuário

// Exportar os modelos
module.exports = {
    Board,
    Threadd,
    Answer,
    User
};

/**

Produto.belongsToMany(Categoria, {
    through: ProdutoCategoria,
    foreignKey: 'produtoId'
});
Categoria.belongsToMany(Produto, {
    through: ProdutoCategoria,
    foreignKey: 'categoriaId'
});

Produto.belongsToMany(Cliente, {
    through: ItensPedido,
    foreignKey: 'produtoId'
});
Cliente.belongsToMany(Produto, {
    through: ItensPedido,
    foreignKey: 'clienteId'
});
module.exports = Produto;


 */