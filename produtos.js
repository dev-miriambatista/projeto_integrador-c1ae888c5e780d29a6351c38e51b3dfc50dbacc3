  document.addEventListener('DOMContentLoaded', function() {
      const lista = document.querySelector("#lista_produtos");
      
      // Dados dos produtos (simulando um banco de dados)
  // produtos.js
const produtos = [
  {
    cod: 1,
    grupo: "Chás",
    descricao: "Chá de Camomila",
    unidade: "g",
    fornecedor: "Empório Verde",
    valor_compra: 8.0,
    valor_venda: 12.0,
    lucro_minimo: 4.0,
    qtda_estoque: 25,
    qtda_minima: 5,
    data_de_entrada: "2024-03-01",
    data_de_saida: "2024-08-01",
    prazo_de_validade: "2025-03-01",
  },
  {
    cod: 2,
    grupo: "Grãos",
    descricao: "Quinoa Orgânica",
    unidade: "kg",
    fornecedor: "Empório Natural",
    valor_compra: 15.0,
    valor_venda: 22.0,
    lucro_minimo: 7.0,
    qtda_estoque: 10,
    qtda_minima: 3,
    data_de_entrada: "2024-02-15",
    data_de_saida: "2024-07-15",
    prazo_de_validade: "2025-02-15",
  },
  {
    cod: 3,
    grupo: "Oleaginosas",
    descricao: "Castanha-do-Pará",
    unidade: "kg",
    fornecedor: "Empório Natural",
    valor_compra: 30.0,
    valor_venda: 45.0,
    lucro_minimo: 15.0,
    qtda_estoque: 20,
    qtda_minima: 5,
    data_de_entrada: "2024-03-10",
    data_de_saida: "2024-08-10",
    prazo_de_validade: "2025-03-10",
  },
  {
    cod: 4,
    grupo: "Superalimentos",
    descricao: "Spirulina em Pó",
    unidade: "g",
    fornecedor: "Empório Verde",
    valor_compra: 50.0,
    valor_venda: 75.0,
    lucro_minimo: 25.0,
    qtda_estoque: 15,
    qtda_minima: 5,
    data_de_entrada: "2024-04-05",
    data_de_saida: "2024-09-05",
    prazo_de_validade: "2025-04-05",
  },
  {
    cod: 5,
    grupo: "Óleos",
    descricao: "Óleo de Coco Extra Virgem",
    unidade: "ml",
    fornecedor: "Empório Natural",
    valor_compra: 20.0,
    valor_venda: 30.0,
    lucro_minimo: 10.0,
    qtda_estoque: 40,
    qtda_minima: 10,
    data_de_entrada: "2024-05-01",
    data_de_saida: "2024-10-01",
    prazo_de_validade: "2025-05-01",
  },
];


      // Função para criar um card de produto
      function criarCardProduto(produto) {
        const li = document.createElement("li");
        li.classList.add("card-produto");
        
        // Verificar se o estoque está baixo
        const estoqueStatus = produto.qtda_estoque < produto.qtda_minima ? 
          `<span class="estoque-baixo">Estoque baixo - ${produto.qtda_estoque} unidades</span>` : 
          `${produto.qtda_estoque} unidades em estoque`;

        li.innerHTML = `
        
          <div class="linha">
              <p><strong>Código:</strong> ${produto.cod}</p>  <p><strong>Grupo:</strong> ${produto.grupo}</p>
          </div>
          <div class="linha">
              <p><strong>Descrição:</strong> ${produto.descricao}</p>  <p><strong>Unidade:</strong> ${produto.unidade}</p>
          </div>
          <p><strong>Fornecedor:</strong> ${produto.fornecedor}</p> 
          <div class="linha">
              <p><strong>Valor Compra:</strong> R$ ${produto.valor_compra.toFixed(2)}</p>  <p><strong>Valor Venda:</strong> R$ ${produto.valor_venda.toFixed(2)}</p>  <p><strong>Lucro Mínimo:</strong> R$ ${produto.lucro_minimo.toFixed(2)}</p>
          </div>
          <div  class="linha">
              <p><strong>Estoque:</strong> ${estoqueStatus}</p>  <p><strong>Estoque Mínimo:</strong> ${produto.qtda_minima} unidades</p>
          </div>
          <div class="linha">
              <p><strong>Data de Entrada:</strong> ${produto.data_de_entrada}</p>  <p><strong>Data de Saída:</strong> ${produto.data_de_saida}</p>
          </div>
          <p><strong>Prazo de Validade:</strong> ${produto.prazo_de_validade}</p>
          <div class="acoes">
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
          </div>
        `;
        
        return li;
      }

      // Adicionar cada produto à lista
      produtos.forEach(produto => {
        const card = criarCardProduto(produto);
        lista.appendChild(card);
      });
    });