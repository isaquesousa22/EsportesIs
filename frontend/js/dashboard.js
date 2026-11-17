const dadosUsuario = localStorage.getItem('usuarioLogado');
const usuario = JSON.parse(dadosUsuario);

if (!usuario) {

  window.location.href = '../login.html';
} else {
  // Se tem usuário, coloca o nome dele na tela!
  document.getElementById('nome-usuario').innerText = usuario.nome;
}


document.getElementById('btn-abrir-menu');
document.getElementById('btn-fechar-menu');
document.getElementById('menu-lateral');
document.getElementById('fundo-menu');


const btnAbrir = document.getElementById('btn-abrir-menu');
const btnFechar = document.getElementById('btn-fechar-menu');
const menuLateral = document.getElementById('menu-lateral');
const fundoMenu = document.getElementById('fundo-menu');

btnAbrir.addEventListener('click', ()=>{
  menuLateral.classList.add('aberto');
  fundoMenu.style.display = 'block';
});

btnFechar.addEventListener('click', ()=>{
    menuLateral.classList.remove('aberto');
    fundoMenu.style.display = 'none';
});


async function carregarVitrine() {
    try {
        const resposta = await fetch('http://localhost:3000/produtos');
        const listaProdutos = await resposta.json();

        const vitrine = document.getElementById('vitrine-produtos');
        vitrine.innerHTML = ''; 

        listaProdutos.forEach(produto => {
            const card = `
                <div class="produto">
                    <div class="img">
                        <img src="${produto.url}" alt="${produto.nome}">
                    </div>
                    <h3 class="titleProduto">${produto.nome}</h3>
                    <p class="descricao"><strong>Descrição:</strong> ${produto.descricao}</p>
                    <p class="preco">R$ ${produto.preco}</p>
                    
                    <button class="btn btn-comprar">Comprar</button>
                    <button class="btn btn-carrinho" onclick="adicionarAoCarrinho('${produto.id}')">
                        Carrinho
                    </button>
                </div>
            `;

            vitrine.innerHTML += card;
        });

    } catch (erro) {
        console.error('Erro ao carregar vitrine:', erro);
    }
}

// Chama a função ao carregar a página
carregarVitrine();