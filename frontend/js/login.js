async function logar(event) {
    event.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    try {
        const resposta = await fetch('http://localhost:3000/clientes');
        const clientes = await resposta.json();

        const usuarioEncontrado = clientes.find(cliente =>
            cliente.email === email && cliente.senha === senha
        );

        if (usuarioEncontrado) {
            // Guarda quem logou no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
            // Redireciona para o dashboard
            window.location.href = 'dashboard/index.html';

        }
        else {
            const respostaAdmin = await fetch('http://localhost:3000/admin');
            const admin = await respostaAdmin.json();

            const adminEncontrado = admin.find(adm => adm.email === email && adm.senha === senha);

            if (adminEncontrado) {
                // Guarda quem logou no localStorage
                localStorage.setItem('usuarioLogado', JSON.stringify(adminEncontrado));
                // Redireciona para o dashboard
                window.location.href = 'admin/index.html';
            }
             else {

            document.getElementById('mensagem').innerText = 'Email ou senha incorretos.';
        }
    }
         
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        document.getElementById('mensagem').innerText = 'Servidor fora do ar! Tente mais tarde.';
    }
}






