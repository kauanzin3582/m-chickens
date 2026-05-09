function atualizarTotal() {
  let total = 0;

  const valores = document.querySelectorAll(".valor-item");
  const quantidades = document.querySelectorAll(".qtd");

  valores.forEach((valor, i) => {
    let preco = parseFloat(valor.textContent.replace(",", "."));
    let qtd = parseInt(quantidades[i].value);

    total += preco * qtd;
  });

  document.getElementById("Total").textContent =
    "Total: R$ " + (Math.round(total * 100) / 100).toFixed(2).replace(".", ",");
}
