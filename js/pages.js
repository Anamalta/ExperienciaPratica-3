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
          <option value="Recife">Recife</option>
          <option value="Belém">Belém</option>
          <option value="Goiânia">Goiânia</option>
          <option value="Natal">Natal</option>
          <option value="Maceió">Maceió</option>
          <option value="João Pessoa">João Pessoa</option>
          <option value="São Luís">São Luís</option>
          <option value="Cuiabá">Cuiabá</option>
          <option value="Campo Grande">Campo Grande</option>
          <option value="Florianópolis">Florianópolis</option>
          <option value="Vitória">Vitória</option>
        </select>
      </div>
      <div class="campo">
        <label for="estado">Estado:</label>
        <select id="estado" name="estado" required>
          <option value="">Selecione...</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
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
