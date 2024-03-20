const { Sequelize } = require("sequelize");

const Pedidos = Sequelize.afterDefine('Pedidos',{
    id:{
        type:Sequelize.BIGINT,
        autoincrement:true,
        primaryKey:true
    },
    data_pedido:{
        type:Sequelize.DATEONLY,
        default: Sequelize.NOW
    },
    status:{
        type:Sequelize.STRING(50)
    }
})