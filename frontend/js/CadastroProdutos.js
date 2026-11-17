async function CadastroProdutos() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const quantidade = document.getElementById('quantidade').value;
    const url = document.getElementById('url').value;

    const NovoProduto = {
        nome: nome,
        descricao: descricao,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade),
        url: url
    };

    try {
        const resposta = await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NovoProduto)
        });

        if (resposta.ok) {
            document.getElementById('mensagem').innerText = 'Produto cadastrado com sucesso!';
            window.location.href = 'CadastroProdutos.html';
        }else{
            document.getElementById('mensagem').innerText = 'Erro ao cadastrar produto.';
        }
    } catch (erro) {
        console.error('Erro no servidor:', erro);
    }
};