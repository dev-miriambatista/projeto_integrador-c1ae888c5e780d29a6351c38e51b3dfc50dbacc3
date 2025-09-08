document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#pendencias");

    const pendencias = [
        { prazo_de_entrega: "23/09/2025", fornecedor: "Campo Verde", produto: "Canela" },
        { prazo_de_entrega: "30/09/2025", fornecedor: "Campo Verde", produto: "Milho" }
    ];

    // Adiciona cada pendência como item de lista
    pendencias.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `Produto: ${p.produto}, Fornecedor: ${p.fornecedor}, Prazo de Entrega: ${p.prazo_de_entrega}`;
        ul.appendChild(li);
    });
});
