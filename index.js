// Aguarda todo o conteúdo da página (HTML) ser carregado antes de rodar o script.
// Isso evita erros de "elemento não encontrado".
document.addEventListener("DOMContentLoaded", function () {

  // ---------- DADOS SIMULADOS ----------
  // Aqui estamos criando arrays de objetos apenas para simular dados
  // Em um sistema real, esses dados poderiam vir de um banco de dados ou de uma API.

  const produtos = [
    { id: 1, nome: "Produto 1", categoria: "Categoria 1", qtda_estoque: 15 },
    { id: 2, nome: "Produto 2", categoria: "Categoria 2", qtda_estoque: 5 },
    { id: 3, nome: "Produto 3", categoria: "Categoria 3", qtda_estoque: 0 },
    { id: 4, nome: "Produto 4", categoria: "Categoria 1", qtda_estoque: 8 },
    { id: 5, nome: "Produto 5", categoria: "Categoria 2", qtda_estoque: 20 },
  ];

  const fornecedores = [
    { id: 1, nome: "Fornecedor A" },
    { id: 2, nome: "Fornecedor B" },
    { id: 3, nome: "Fornecedor C" },
  ];

  const vendasHoje = [
    { id: 1, produto: "Produto 1", valor: 25.5 },
    { id: 2, produto: "Produto 2", valor: 10.0 },
    { id: 3, produto: "Produto 3", valor: 45.75 },
  ];

  const pedidosPendentes = [
    { id: 1, cliente: "Maria" },
    { id: 2, cliente: "João" },
  ];

  const movimentacoes = [
    { id: 1, tipo: "Entrada", produto: "Produto 4" },
    { id: 2, tipo: "Saída", produto: "Produto 2" },
    { id: 3, tipo: "Entrada", produto: "Produto 5" },
  ];

  // ---------- FUNÇÕES PARA ATUALIZAR CADA CARD DO DASHBOARD ----------

  // Atualiza o card que mostra o total de produtos cadastrados
  function atualizarCardTotalProdutos() {
    document.querySelector("#info_total_produtos").textContent = // seleção do id do botão
      `${produtos.length} Produtos`; // exibe a quantidade de produtos cadastrados -> dentro da crase, colocar a variável 
                                                                                       // e pois a concatenação do texto.
  }

  // Atualiza o card de vendas de hoje (somando o valor de todas as vendas)
  function atualizarCardVendasHoje() {
    // reduce percorre o array e soma os valores de cada venda
    const total = vendasHoje.reduce((soma, venda) => soma + venda.valor, 0);
    // toFixed(2) mantém duas casas decimais (formato de dinheiro)
    document.querySelector("#info_vendas_hoje").textContent =
      `R$ ${total.toFixed(2)} Hoje`;
  }

  // Atualiza o card de fornecedores cadastrados
  function atualizarCardFornecedores() {
    document.querySelector("#info_total_fornecedores").textContent =
      `${fornecedores.length} Fornecedores`;
  }

  // Atualiza o card de pedidos pendentes
  function atualizarCardPedidosPendentes() {
    document.querySelector("#info_pedidos_pendentes").textContent =
      `${pedidosPendentes.length} Pendentes`;
  }

  // Atualiza o card de movimentações de estoque
  function atualizarCardMovimentacoes() {
    document.querySelector("#info_movimentacoes").textContent =
      `${movimentacoes.length} Entradas/Saídas`;
  }

  // Atualiza o card de alertas de estoque baixo (<= 5 unidades)
  function atualizarCardAlertasEstoque() {
    // filtra apenas produtos com estoque crítico (5 ou menos)
    const produtosCriticos = produtos.filter(p => p.qtda_estoque <= 5);
    document.querySelector("#info_alerta_estoque").textContent =
      `${produtosCriticos.length} Alertas`;
  }

  // ---------- CHAMAR TODAS AS FUNÇÕES PARA EXIBIR OS DADOS ----------
  atualizarCardTotalProdutos();
  atualizarCardVendasHoje();
  atualizarCardFornecedores();
  atualizarCardPedidosPendentes();
  atualizarCardMovimentacoes();
  atualizarCardAlertasEstoque();
});

// ---------- CÓDIGO DE produtos.js (LISTA DE PRODUTOS DETALHADA) ----------

// Seleciona o elemento <ul> que vai receber os produtos
const lista = document.querySelector("#lista_produtos");

// Percorre cada produto do array e cria um <li> para exibir na tela
produtos.forEach(produto => {
  // Cria um item de lista <li>
  const item = document.createElement("li");

  // Define o conteúdo do item (nome, categoria e quantidade em estoque)
  item.textContent = `${produto.nome} - ${produto.categoria} - ${produto.qtda_estoque} em estoque`;

  // Adiciona o item dentro da lista <ul>
  lista.appendChild(item);
});
