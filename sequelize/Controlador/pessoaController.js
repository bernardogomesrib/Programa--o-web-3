const Pessoa = require('../Entidade/pessoa');



//exports é a palavra que vai dizer que isso é uma função para ser usada externamente, async é para dizer que a função
// não é sincrona, ou seja, vai ter ser criado um certo paralelismo ou diz-se que vai entregar um promice object
// await é para esperar a resposta da função <- razão da função ser asincrona, também pode ser feito caso esteja
// usando algum tipo de fetch(url), que no caso serve para fazer o uso de alguma api
exports.getPessoa = async (req, res) => {
    try {

        const pessoa = await Pessoa.findAll();
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa - '+error.message });
    }
};

exports.getPessoaExpecifica = async(req,res) =>{
    // req é a requisição, params é do url da requisição
    const {id} = req.params
    try {
        //encontrar uma pessoa pelo id dela
        const pessoa = await Pessoa.findByPk(id)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao procurar pessoa - '+error.message });
    }
}

exports.inserirPessoa = async (req, res) => {
    try {
        //req.body é o corpo da requisição, dentro dele irá ser procurado nome e altura, caso não exista se não me engano da erro
        const { nome, altura } = req.body;

        // inserindo os dados no banco de dados
        const novoPessoa = await Pessoa.create({
            nome,
            altura
        });
        //entregando de volta o mesmo objeto que foi enviado
        res.json(novoPessoa);
    } catch (error) {
        //caso dê erro, status 500 e o erro
        res.status(500).json({ error: 'Erro ao inserir pessoa - '+error.message });
    }
};

exports.atualizarPessoa = async (req, res) => {
    try {
        const { id } = req.params; // Obtém o ID da pessoa a ser atualizado
        const { nome, altura } = req.body; // Obtém os novos dados da pessoa

        // Busca o pessoa pelo ID
        const pessoa = await Pessoa.findByPk(id);
        //testando se existe
        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        // Atualiza os dados da pessoa
        await pessoa.update({
            nome,
            altura
        });

        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pessoa - '+error.message });
    }
};

exports.deletarPessoa = async (req, res) => {
    try {
        const { id } = req.params; 

        // Procurar a pessoa pelo ID
        const pessoa = await Pessoa.findByPk(id);

        // Se a pessoa não existe, retornar um erro 404
        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        // Deletar a pessoa do banco de dados
        await pessoa.destroy();

        // Responder com uma mensagem de sucesso
        res.json({ message: 'Pessoa deletada com sucesso' });
    } catch (error) {
        // Se houver algum erro, responder com status 500 e a mensagem de erro
        res.status(500).json({ error: 'Erro ao deletar pessoa - ' + error.message });
    }
};