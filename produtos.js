  document.addEventListener('DOMContentLoaded', function() {
      const lista = document.querySelector("#lista_produtos");
      
      // Dados dos produtos (simulando um banco de dados)
      const produtos = [
        {
          cod: 1, 
          grupo: "Cosmetico",
          descricao: "Dorflex", 
          unidade: "mg", 
          fornecedor: "Drogaria São Paulo", 
          valor_compra: 5.00, 
          valor_venda: 8.00, 
          lucro_minimo: 3.00, 
          qtda_estoque: 50, 
          qtda_minima: 10
        },
        {
          cod: 2, 
          grupo: "Medicamento", 
          descricao: "Paracetamol", 
          unidade: "mg", 
          fornecedor: "Medley", 
          valor_compra: 7.50, 
          valor_venda: 10.00, 
          lucro_minimo: 2.50, 
          qtda_estoque: 3,  // Estoque baixo
          qtda_minima: 5
        }
      ];

      // Função para criar um card de produto
      function criarCardProduto(produto) {
        const li = document.createElement("li");
        li.classList.add("card-produto");
        
        // Verificar se o estoque está baixo
        const estoqueStatus = produto.qtda_estoque < produto.qtda_minima ? 
          `<span class="estoque-baixo">Estoque baixo - ${produto.qtda_estoque} unidades</span>` : 
          `${produto.qtda_estoque} unidades`;

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
        `;
        
        return li;
      }

      // Adicionar cada produto à lista
      produtos.forEach(produto => {
        const card = criarCardProduto(produto);
        lista.appendChild(card);
      });
    });