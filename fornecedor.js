// fornecedor.js

// Espera o DOM carregar antes de manipular elementos
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o <ul> onde os fornecedores serão inseridos
    const ul = document.querySelector("#fornecedores-list");

    // Lista de fornecedores
    const fornecedores = [
        {
            id: 1,
            nome: "Forn A",
            endereço: "Rua A, 123",
            telefone: "1234-5678",
            email: "fornA@example.com",
            contato: "João Silva",
            produtos_fornecidos: ["Produto 1", "Produto 2"],
            valor_minimo_pedido: 100.0,
            prazo_entrega: "5 dias",
            observações: "Entrega rápida e eficiente."
        },
        {
            id: 2,
            nome: "Forn B",
            endereço: "Rua B, 456",
            telefone: "2345-6789",
            email: "fornB@example.com",
            contato: "Maria Oliveira",
            produtos_fornecidos: ["Produto 3", "Produto 4"],
            valor_minimo_pedido: 200.0,
            prazo_entrega: "7 dias",
            observações: "Atendimento ao cliente excepcional."
        }
    ];

    // Função que cria um card <li> para cada fornecedor
    function criarCardFornecedor(fornecedor) {
        const li = document.createElement("li");
        li.classList.add("card-fornecedor");
        li.innerHTML = `
            <h3>${fornecedor.nome}</h3>
            <p><strong>Endereço:</strong> ${fornecedor.endereço}</p>
            <p><strong>Telefone:</strong> ${fornecedor.telefone}</p>
            <p><strong>Email:</strong> ${fornecedor.email}</p>
            <p><strong>Contato:</strong> ${fornecedor.contato}</p>
            <p><strong>Produtos Fornecidos:</strong> ${fornecedor.produtos_fornecidos.join(", ")}</p>
            <p><strong>Valor Mínimo do Pedido:</strong> R$ ${fornecedor.valor_minimo_pedido.toFixed(2)}</p>
            <p><strong>Prazo de Entrega:</strong> ${fornecedor.prazo_entrega}</p>
            <p><strong>Observações:</strong> ${fornecedor.observações}</p>
        `;
        return li;
    }

    // Adiciona cada fornecedor à lista
    fornecedores.forEach(fornecedor => {
        const card = criarCardFornecedor(fornecedor);
        ul.appendChild(card);
    });

    console.log("Lista de fornecedores carregada com sucesso!");
});
