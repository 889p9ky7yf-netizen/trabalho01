
const produtoModel = require('../model/produtoModel');

// Consultar todos os produtos
function listar(req, res) {
    const produtos = produtoModel.listarProdutos();

    res.status(200).json(produtos);
}

// Consultar produto pelo id
function buscarPorId(req, res) {

    const id = Number(req.params.id);

    const produto = produtoModel.buscarProduto(id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
}

// Cadastrar produto
function cadastrar(req, res) {

    const { nome, categoria, preco, estoque } = req.body;

    // Verificar se os campos foram preenchidos
    if (
        !nome ||
        !categoria ||
        preco === undefined ||
        estoque === undefined ||
        nome.trim() === "" ||
        categoria.trim() === "" ||
        !Number.isFinite(Number(preco)) ||
        !Number.isFinite(Number(estoque)) ||
        Number(preco) < 0 ||
        Number(estoque) < 0
    ) {
        return res.status(400).json({
            mensagem: "Preencha todos os campos corretamente"
        });
    }

    const novoProduto = produtoModel.cadastrarProduto(
        nome,
        categoria,
        Number(preco),
        Number(estoque)
    );

    res.status(201).json({
        mensagem: "Produto cadastrado com sucesso!",
        produto: novoProduto
    });
}

module.exports = {
    listar,
    buscarPorId,
    cadastrar
};
