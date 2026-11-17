async function cadastrar() {

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    const NovoAdmin = {
        nome: nome,
        cpf: cpf,
        endereco: endereco,
        email: email,
        senha: senha
    };

    try{

        const resposta = await fetch('http://localhost:3000/admin', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(NovoAdmin)

        });
        
        if(resposta.ok) {
        document.getElementById('mensagem').innerText = 'Cadastro realizado com sucesso!';
         window.location.href = 'index.html';
        }
        else{
        document.getElementById('mensagem').innerText = 'Erro ao realizar cadastro.';
        }

    }catch(error){
        console.error('Erro ao realizar cadastro:', error);
        document.getElementById('mensagem').innerText = 'Servidor desligado, tenta mais tarde';

    }

}