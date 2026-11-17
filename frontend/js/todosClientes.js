
async function carregarClientes() {
    try {
        const resposta = await fetch('http://localhost:3000/clientes');
        const clientes = await resposta.json();
        const tabela = document.getElementById('corpo-tabela');
        tabela.innerHTML = ''; // Limpa a tabela antes de desenhar
        // 2. O .forEach() faz o papel do @for do Angular!
        clientes.forEach(cliente => {
            const linha = `
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.endereco}</td>
                    <td class="acoes">
                        <button class="btn btn-warning" onclick="editar('${cliente.id}')">
                            Editar
                        </button>
                        <button class="botao-excluir" onclick="excluir('${cliente.id}')">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
            // Adiciona a linha dentro da tabela
            tabela.innerHTML += linha;
        });
    } catch (erro) {
        console.error('Erro ao carregar clientes:', erro);
    }
}

carregarClientes();