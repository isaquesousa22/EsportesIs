const API_URL = "http://localhost:3000";

async function registrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  const msg = await res.text();
  document.getElementById("mensagem").innerText = msg;

  if (res.ok) {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
}


async function logar() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const msg = await res.text();
  document.getElementById("mensagem").innerText = msg;

  if (res.ok && msg.includes("Bem-vindo")) {
 
    const nomeUsuario = msg.replace("Bem-vindo, ", "").replace("!", "").trim();


    localStorage.setItem("usuarioLogado", nomeUsuario);


    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
}


function mostrarUsuario() {
  const nome = localStorage.getItem("usuarioLogado");
  const elemento = document.getElementById("usuarioNome");

  if (nome && elemento) {
    elemento.innerText = `Olá, ${nome}! 👋`;
  }
}

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}
