// ============================
// Funções de carregamento das páginas
// ============================

function loadHome() {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = `
  <section id="sobre">
    <h2>Sobre a Nossa História</h2>
    <p>A ONG Abraço Amigo nasceu com a missão de oferecer amor, atenção e qualidade de vida aos idosos em situação de vulnerabilidade.</p>
    <div class="section-grid">
      <div class="card">
        <img src="assets/imagens/voluntarios_com_idosos.jpg" alt="Voluntários com idosos sorrindo">
        <h3 class="valor">Voluntariado</h3>
        <div class="badges">
          <span class="badge">Social</span>
          <span class="badge">Educação</span>
        </div>
      </div>
      <div class="card">
        <img src="assets/imagens/idosos_sorrindo.jpg" alt="Idosos em harmonia">
        <h3 class="valor">Bem-Estar</h3>
        <div class="badges">
          <span class="badge">Saúde</span>
          <span class="badge">Alegria</span>
        </div>
      </div>
    </div>
  </section>

  <section id="valores">
    <h2>Nossos Valores</h2>
    <div class="section-grid">
      <div class="card">
        <h3 class="valor">❤️ Respeito e Dignidade</h3>
      </div>
      <div class="card">
        <h3 class="valor">💛 Amor e Empatia</h3>
      </div>
      <div class="card">
        <h3 class="valor">💚 Transparência e Compromisso</h3>
      </div>
    </div>
  </section>
  `;
}

function loadProjetos() {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = `
  <section id="projetos">
    <h2>Nossas Atividades</h2>
    <div class="section-grid">
      <div class="card">
        <img src="assets/imagens/arte_terapia_idosos.jpg" alt="Arteterapia com idosos">
        <h3>Arteterapia</h3>
        <div class="badges">
          <span class="badge">Arte</span>
          <span class="badge">Criatividade</span>
        </div>
      </div>
      <div class="card">
        <img src="assets/imagens/atividades-cognitivas.jpg" alt="Atividades cognitivas">
        <h3>Atividades Cognitivas</h3>
        <div class="badges">
          <span class="badge">Memória</span>
          <span class="badge">Lazer</span>
        </div>
      </div>
      <div class="card">
        <img src="assets/imagens/voluntariado_idosos.jpg" alt="Voluntariado">
        <h3>Voluntariado</h3>
        <div class="badges">
          <span class="badge">Social</span>
          <span class="badge">Educação</span>
        </div>
      </div>
      <div class="card">
        <img src="assets/imagens/doacao.jpg" alt="Campanhas de doação">
        <h3>Campanhas de Solidariedade</h3>
        <div class="badges">
          <span class="badge">Doação</span>
          <span class="badge">Solidariedade</span>
        </div>
      </div>
    </div>
  </section>
  `;
}

function loadCadastro() {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = `
  <section id="formulario-voluntarios">
    <h2>Seja um Voluntário Abraço Amigo</h2>
    <form id="formCadastro">
      <div class="campo">
        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" name="nome" required>
      </div>
      <div class="campo">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="campo">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required>
      </div>
      <div class="campo">
        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" required>
      </div>
      <div class="campo">
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento" required>
      </div>
      <div class="campo">
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required>
      </div>
      <div class="campo">
        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="\\d{5}-\\d{3}" required>
      </div>
      <div class="campo">
        <label for="cidade">Cidade:</label>
        <select id="cidade" name="cidade" required>
          <option value="">Selecione...</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Belo Horizonte">Belo Horizonte</option>
          <option value="Porto Alegre">Porto Alegre</option>
          <option value="Curitiba">Curitiba</option>
          <option value="Salvador">Salvador</option>
          <option value="Brasília">Brasília</option>
          <option value="Fortaleza">Fortaleza</option>
          <option value="Manaus">Manaus</option>
        </select>
      </div>
      <div class="campo">
        <label for="estado">Estado:</label>
        <select id="estado" name="estado" required>
          <option value="">Selecione...</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="PR">Paraná</option>
          <option value="BA">Bahia</option>
          <option value="DF">Distrito Federal</option>
          <option value="CE">Ceará</option>
          <option value="AM">Amazonas</option>
        </select>
      </div>
      <div class="campo">
        <label for="areaInteresse">Área de interesse:</label>
        <select id="areaInteresse" name="areaInteresse" required>
          <option value="">Selecione...</option>
          <option value="arteterapia">Arteterapia</option>
          <option value="musica">Oficina de Música</option>
          <option value="eventos">Eventos e Campanhas</option>
          <option value="apoio">Apoio ao Idoso</option>
        </select>
      </div>
      <div class="campo">
        <label for="mensagem">Por que deseja ser voluntário?</label>
        <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
      </div>
      <button type="submit" class="cta-btn">Enviar Cadastro</button>
    </form>
    <section id="imagem-voluntariado">
      <h2>Junte-se a Nós!</h2>
      <img src="assets/imagens/voluntariado_idosos.jpg" alt="Voluntariado com idosos" class="card">
    </section>
  </section>
  `;
}

// ============================
// SPA e navegação
// ============================

const links = document.querySelectorAll('nav a');
const headerCTA = document.querySelector('header .cta-btn');

function setActive(link){
  links.forEach(l => l.classList.remove('ativo'));
  link.classList.add('ativo');
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;
    if(page === 'home') loadHome();
    if(page === 'projetos') loadProjetos();
    if(page === 'cadastro') loadCadastro();
    setActive(link);
  });
});

// CTA do header
headerCTA.addEventListener('click', e => {
  e.preventDefault();
  loadProjetos();
  setActive(document.querySelector('nav a[data-page="projetos"]'));
});

// Carregar home por padrão
loadHome();

// ============================
// Formulário com validação e localStorage
// ============================

document.addEventListener('submit', function(e){
  if(e.target && e.target.id === 'formCadastro'){
    e.preventDefault();
    const form = e.target;
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const dataNascimento = form.dataNascimento.value;
    const endereco = form.endereco.value.trim();
    const cep = form.cep.value.trim();
    const cidade = form.cidade.value;
    const estado = form.estado.value;
    const areaInteresse = form.areaInteresse.value;
    const mensagem = form.mensagem.value.trim();

    if(!nome || !email || !cpf || !telefone || !dataNascimento || !endereco || !cep || !cidade || !estado || !areaInteresse || !mensagem){
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    voluntarios.push({nome,email,cpf,telefone,dataNascimento,endereco,cep,cidade,estado,areaInteresse,mensagem});
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    // Mostrar modal
    document.getElementById('modal').classList.add('show');
    form.reset();
  }
});

// Fechar modal
document.getElementById('fecharModal').addEventListener('click', function(){
  document.getElementById('modal').classList.remove('show');
});
