const API_URL = "http://localhost:3000";

async function registrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, email, senha })
  });

  document.getElementById("mensagem").innerText = await res.text();
}

async function logar() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, senha })
  });

  document.getElementById("mensagem").innerText = await res.text();
}
