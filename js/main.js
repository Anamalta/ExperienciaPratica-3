document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");
  const links = document.querySelectorAll("nav a");
  const cta = document.getElementById("ctaProjetos");
  const modal = document.getElementById("modal");
  const fecharModal = document.getElementById("fecharModal");

  // SPA: troca de seções
  function carregarPagina(pagina) {
    links.forEach(a => a.classList.remove("ativo"));
    document.querySelector(`a[href="#${pagina}"]`).classList.add("ativo");

    if (pagina === "home") {
      conteudo.innerHTML = `
        <section>
          <h2>Amor e Atenção para a Melhor Idade</h2>
          <div class="section-grid">
            <div class="card"><img src="assets/imagens/aula_de_arte.jpg"><h3>Aulas de Arte</h3></div>
            <div class="card"><img src="assets/imagens/voluntarios_com_idosos.jpg"><h3>Voluntariado</h3></div>
            <div class="card"><img src="assets/imagens/idosos_sorrindo.jpg"><h3>Momentos Felizes</h3></div>
          </div>
        </section>
      `;
    }

    if (pagina === "projetos") {
      conteudo.innerHTML = `
        <section>
          <h2>Nossos Projetos</h2>
          <div class="section-grid">
            <div class="card"><img src="assets/imagens/arte_terapia_idosos.jpg"><h3>Arte Terapia</h3></div>
            <div class="card"><img src="assets/imagens/atividades-cognitivas.jpg"><h3>Atividades Cognitivas</h3></div>
            <div class="card"><img src="assets/imagens/doacao.jpg"><h3>Campanhas de Doação</h3></div>
          </div>
        </section>
      `;
    }

    if (pagina === "cadastro") {
      conteudo.innerHTML = `
        <section>
          <h2>Cadastro de Voluntários</h2>
          <form id="formCadastro">
            <label>Nome Completo*</label>
            <input type="text" name="nome" required>
            <label>Email*</label>
            <input type="email" name="email" required>
            <label>CPF*</label>
            <input type="text" name="cpf" required>
            <label>Cidade*</label>
            <input type="text" name="cidade" required>
            <label>CEP*</label>
            <input type="text" name="cep" required>
            <button type="submit">Enviar</button>
          </form>
        </section>
      `;
    }
  }

  // eventos de navegação
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = e.target.getAttribute("href").substring(1);
      carregarPagina(pagina);
    });
  });

  cta.addEventListener("click", () => carregarPagina("projetos"));

  // submissão do formulário
  document.addEventListener("submit", e => {
    if (e.target && e.target.id === "formCadastro") {
      e.preventDefault();
      const form = e.target;
      const dados = {
        nome: form.nome.value.trim(),
        email: form.email.value.trim(),
        cpf: form.cpf.value.trim(),
        cidade: form.cidade.value.trim(),
        cep: form.cep.value.trim()
      };

      if (Object.values(dados).some(v => v === "")) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
      voluntarios.push(dados);
      localStorage.setItem("voluntarios", JSON.stringify(voluntarios));

      modal.classList.add("show");
      form.reset();
    }
  });

  fecharModal.addEventListener("click", () => modal.classList.remove("show"));

  carregarPagina("home");
});
