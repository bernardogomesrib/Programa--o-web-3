const User  = require("../entities/User")
const UserControl = {
    async getAll(req,res){
        try {
            res.json(await User.findAll())
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao buscar os Users - '+error.message,
                name:error.name,
                stack: error.stack
            })
        }
    },

    async getById(req,res){
        const {id} = req.params;
        try {
            return res.json(await User.findByPk(id));
        } catch (error) {
            res.status(500).json({error: 'Erro ao procurar User - '+error.message})
        }
    },
    
    
    async save(req,res){
        const {nome,password} = req.body;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        try {
            const UserInstance = await User.create({
                nome,password
            })
            res.json(UserInstance);
        } catch (error) {
            res.status(500).json({
                error:'Erro ao salvar User - '+ error.message,
                name:error.name,
                stack: error.stack
            })
        }
    },

    //arquivo nesta função
    async update(req,res){
        const {id,nome,password} = req.body
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        try {
            const UserInstance = await User.findByPk(id);
            if(!UserInstance){
                return res.status(404).json({
                    error: 'User não encontrado'
                });
            }
    
            await UserInstance.update({ nome,password,ip });
            res.json(UserInstance);
    
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao atualizar User - ' + error.message,
                name: error.name,
                stack: error.stack
            });
        }
    },
    
    async delete(req,res){
        const {id}= req.body;

        const UserInstance = await User.findByPk(id);
        try {
            
            if(!UserInstance){
                return req.status(404).json({
                    error:'Não existe a User'
                })
            }
            await UserInstance.destroy();
            res.status(201).json({message :'User deletado'});
        } catch (error) {
            res.status(500).json({error:'erro ao deletar - '+error.message,
            name:error.name,
            stack: error.stack})
        }
    }
}

module.exports = UserControl;