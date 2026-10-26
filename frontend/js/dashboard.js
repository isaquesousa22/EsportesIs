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