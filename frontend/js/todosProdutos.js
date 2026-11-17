
async function carregarProdutos() {
    try {
        const resposta = await fetch('http://localhost:3000/produtos');
        const produtos = await resposta.json();
        const tabela = document.getElementById('corpo-tabela');
        tabela.innerHTML = ''; // Limpa a tabela antes de desenhar
        // 2. O .forEach() faz o papel do @for do Angular!
        produtos.forEach(produto => {
            const linha = `
                <tr>
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>${produto.quantidade}</td>
                    <td>R$ ${produto.preco}</td>
                    <td>${produto.descricao}</td>
                    <td class="acoes">
                        <button class="btn btn-warning" onclick="editar('${produto.id}')">
                            Editar
                        </button>
                        <button class="botao-excluir" onclick="excluir('${produto.id}')">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
            // Adiciona a linha dentro da tabela
            tabela.innerHTML += linha;
        });
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
}
// 3. Executa a função assim que a página carregar
carregarProdutos();