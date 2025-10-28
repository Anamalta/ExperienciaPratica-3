document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");

  // Máscaras de CPF, telefone e CEP
  const cpfInput = document.getElementById("cpf");
  const telefoneInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  function aplicarMascara(input, mascara) {
    input.addEventListener("input", () => {
      let valor = input.value.replace(/\D/g, "");
      let novoValor = "";
      let indice = 0;
      for (let i = 0; i < mascara.length && indice < valor.length; i++) {
        if (mascara[i] === "#") {
          novoValor += valor[indice];
          indice++;
        } else {
          novoValor += mascara[i];
        }
      }
      input.value = novoValor;
    });
  }

  if (cpfInput) aplicarMascara(cpfInput, "###.###.###-##");
  if (telefoneInput) aplicarMascara(telefoneInput, "(##) #####-####");
  if (cepInput) aplicarMascara(cepInput, "#####-###");

  // Modal de sucesso
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Cadastro enviado com sucesso!</h2>
      <button id="fecharModal">Fechar</button>
    </div>
  `;
  document.body.appendChild(modal);

  const fecharModal = document.getElementById("fecharModal");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      form.reset();
    });
  }

  fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

