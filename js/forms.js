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
    const cidade = form.cidade.value.trim();
    const estado = form.estado.value;
    const areaInteresse = form.areaInteresse.value;
    const mensagem = form.mensagem.value.trim();

    if(!nome || !email || !cpf || !telefone || !dataNascimento || !endereco || !cep || !cidade || !estado || !areaInteresse || !mensagem){
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    // Salvar no localStorage
    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    voluntarios.push({nome,email,cpf,telefone,dataNascimento,endereco,cep,cidade,estado,areaInteresse,mensagem});
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    // Mostrar modal
    const modal = document.getElementById('modal');
    modal.classList.add('show');

    form.reset();
  }
});

// Fechar modal
document.getElementById('fecharModal').addEventListener('click', function(){
  document.getElementById('modal').classList.remove('show');
});

