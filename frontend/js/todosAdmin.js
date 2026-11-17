
async function carregarAdmin() {
    try {
        const resposta = await fetch('http://localhost:3000/admin');
        const admin = await resposta.json();
        const tabela = document.getElementById('corpo-tabela');
        tabela.innerHTML = ''; // Limpa a tabela antes de desenhar
        // 2. O .forEach() faz o papel do @for do Angular!
        admin.forEach(admin => {
            const linha = `
                <tr>
                    <td>${admin.id}</td>
                    <td>${admin.nome}</td>
                    <td>${admin.cpf}</td>
                    <td>${admin.email}</td>
                    <td>${admin.endereco}</td>
                    <td class="acoes">
                        <button class="btn btn-warning" onclick="editar('${admin.id}')">
                            Editar
                        </button>
                        <button class="botao-excluir" onclick="excluir('${admin.id}')">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
            // Adiciona a linha dentro da tabela
            tabela.innerHTML += linha;
        });
    } catch (erro) {
        console.error('Erro ao carregar administradores:', erro);
    }
}

carregarAdmin();