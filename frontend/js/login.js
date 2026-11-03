async function logar(event) {
    //asycn transfroma a função em assincrona ele ajuda a não travar, quando for procurar no banco de dados
    //utilizando o await para espara a busca/operação
    // como as consultas à API, sem bloquear a execução do navegador.
    event.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    try {
        const resposta = await fetch('http://localhost:3000/clientes'); //o fecth está fazendo a chamda para a minha API, buscando na parte de clientes
        const clientes = await resposta.json();

        const usuarioEncontrado = clientes.find(cliente =>
            cliente.email === email && cliente.senha === senha
            //Aqui está buscando o clinte 
            // o find está percorrendo a lista de clientes
            // está buscanod aquele q tem o emaile a senha
        );

 
       if (usuarioEncontrado)  {
            
            // Aqui nessa parte guarda quem logou no localStorage caso seja um cliente 
            // no localstorege, convertendo o objeto para json
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
            // aqui redireciona para o dashboard
            window.location.href = 'dashboard/index.html';

        }

        else {

            //Aqui é caso a senha e o email não bater com um usaurio, vai verificar se é administrador
            const respostaAdmin = await fetch('http://localhost:3000/admin');
            const admin = await respostaAdmin.json();

            const adminEncontrado = admin.find(adm => adm.email === email && adm.senha === senha);

            if (adminEncontrado) {
                
                localStorage.setItem('usuarioLogado', JSON.stringify(adminEncontrado));
                
                window.location.href = 'admin/index.html';
            }
             else {
            //se não for nenhum dos dois acima
            document.getElementById('mensagem').innerText = 'Email ou senha incorretos.';
        }
    }
         
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        document.getElementById('mensagem').innerText = 'Servidor fora do ar! Tente mais tarde.';
    }
}






