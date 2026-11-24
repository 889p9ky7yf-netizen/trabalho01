
let produtos = [
    {
        id: 1,
        nome: "Caderno",
        categoria: "Papelaria",
        preco: 20,
        estoque: 10
    },
    {
        id: 2,
        nome: "Caneta",
        categoria: "Escrita",
        preco: 3,
        estoque: 50
    }
];

// Mostrar todos os produtos
function listarProdutos() {
    return produtos;
}

// Procurar produto pelo id
function buscarProduto(id) {
    return produtos.find(produto => produto.id === id);
}

// Cadastrar produto
function cadastrarProduto(nome, categoria, preco, estoque) {

    let novoId = 1;

    if (produtos.length > 0) {
        novoId = Math.max(...produtos.map(produto => produto.id)) + 1;
    }

    const novoProduto = {
        id: novoId,
        nome: nome,
        categoria: categoria,
        preco: preco,
        estoque: estoque
    };

    produtos.push(novoProduto);

    return novoProduto;
}

module.exports = {
    listarProdutos,
    buscarProduto,
    cadastrarProduto
};
