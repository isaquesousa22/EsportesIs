async function registrar() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor


    const novoCliente = {
        nome: nome,
        cpf: cpf,
        endereco: endereco,
        email: email,
        senha: senha
    };


    try {
        
        // 1. TENTA FAZER A REQUISIÇÃO PARA O SERVIDOR:

 const response = await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCliente)
    });

    if(response.ok) {
        document.getElementById('mensagem').innerText = 'Cadastro realizado com sucesso!';
    }
    else{
        document.getElementById('mensagem').innerText = 'Erro ao realizar cadastro.';
    }
        
}  catch (error) {

    // 2. SE DER RUIM (ex: servidor desligado ou sem internet), CAI AQUI:
        console.error('Erro ao realizar cadastro:', error);
        document.getElementById('mensagem').innerText = 'Servidor fora do ar! Tente mais tarde.';
    }


}