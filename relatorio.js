document.addEventListener("DOMContentLoaded", function () {
  const lista = document.querySelector("#lista_produtos");

  const filtroFornecedor = document.querySelector("#filtro_fornecedor");
  const filtroCategoria = document.querySelector("#filtro_categoria");
  const filtroEntrada = document.querySelector("#filtro_data_entrada");
  const filtroSaida = document.querySelector("#filtro_data_saida");
  const filtroValidade = document.querySelector("#filtro_validade");
  const btnResetar = document.querySelector("#btn_resetar");

  function renderizarProdutos(produtosFiltrados) {
    lista.innerHTML = "";
    if (produtosFiltrados.length === 0) {
      lista.innerHTML = "<li>Nenhum produto encontrado.</li>";
      return;
    }
    produtosFiltrados.forEach(produto => {
      const card = criarCardProduto(produto);
      lista.appendChild(card);
    });
  }

  function filtrarProdutos() {
    const fornecedor = filtroFornecedor.value;
    const categoria = filtroCategoria.value;
    const dataEntrada = filtroEntrada.value;
    const dataSaida = filtroSaida.value;
    const validade = filtroValidade.value;

    const filtrados = produtos.filter(p => {
      let fornecedorOk = !fornecedor || p.fornecedor === fornecedor;
      let categoriaOk = !categoria || p.grupo === categoria;
      let entradaOk = !dataEntrada || new Date(p.data_de_entrada) >= new Date(dataEntrada);
      let saidaOk = !dataSaida || new Date(p.data_de_saida) <= new Date(dataSaida);
      let validadeOk = !validade || new Date(p.prazo_de_validade) <= new Date(validade);
      return fornecedorOk && categoriaOk && entradaOk && saidaOk && validadeOk;
    });

    renderizarProdutos(filtrados);
  }

  // Eventos: todos filtros reagem em tempo real
  [filtroFornecedor, filtroCategoria, filtroEntrada, filtroSaida, filtroValidade]
    .forEach(el => el.addEventListener("change", filtrarProdutos));

  btnResetar.addEventListener("click", () => {
    filtroFornecedor.value = "";
    filtroCategoria.value = "";
    filtroEntrada.value = "";
    filtroSaida.value = "";
    filtroValidade.value = "";
    renderizarProdutos(produtos);
  });

  // Inicializa com todos os produtos
  renderizarProdutos(produtos);
});
