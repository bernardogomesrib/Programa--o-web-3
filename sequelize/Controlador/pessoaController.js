const Pessoa = require('../Entidade/pessoa');

exports.getPessoa = async (req, res) => {
    try {
        const pessoa = await Pessoa.findAll();
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa' });
    }
};

exports.getPessoaExpecifica = async(req,res) =>{
    const {id} = req.params
    try {
        const pessoa = await Pessoa.findByPk(id)
    } catch (error) {
        
    }
}

exports.inserirPessoa = async (req, res) => {
    try {
        // Extraia os dados da requisição (por exemplo, do corpo da requisição)
        const { nome, altura } = req.body;

        // Insira os dados no banco de dados
        const novoPessoa = await Pessoa.create({
            nome,
            altura
        });

        res.json(novoPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao inserir pessoa' });
    }
};

exports.atualizarPessoa = async (req, res) => {
    try {
        const { id } = req.params; // Obtém o ID da pessoa a ser atualizado
        const { nome, preco } = req.body; // Obtém os novos dados da pessoa

        // Busca o pessoa pelo ID
        const pessoa = await Pessoa.findByPk(id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrado' });
        }

        // Atualiza os dados da pessoa
        await pessoa.update({
            nome,
            preco
        });

        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pessoa' });
    }
};