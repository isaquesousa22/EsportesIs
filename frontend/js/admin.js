async function carregarTotais() {
    try {
        // 1. Busca os 3 endpoints no json-server
        const respProdutos = await fetch('http://localhost:3000/produtos');
        const produtos = await respProdutos.json();

        const respAdmins = await fetch('http://localhost:3000/admin');
        const admins = await respAdmins.json();

        const respClientes = await fetch('http://localhost:3000/clientes');
        const clientes = await respClientes.json();

        // 2. Coloca o tamanho de cada lista (.length) na tela!
        document.getElementById('totalProdutos').innerText = produtos.length;
        document.getElementById('totalAdmins').innerText = admins.length;
        document.getElementById('totalClientes').innerText = clientes.length;

    } catch (erro) {
        console.error('Erro ao carregar métricas:', erro);
    }
}

// Executa a função ao abrir a página
carregarTotais();