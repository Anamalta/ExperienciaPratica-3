// ============================
// FUNÇÃO DE MODAL
// ============================
const modal = document.getElementById('modal');
const btnFechar = document.getElementById('fecharModal');

function abrirModal() {
  modal.classList.add('show');
}

function fecharModal() {
  modal.classList.remove('show');
}

if (btnFechar) {
  btnFechar.addEventListener('click', fecharModal);
}

// ============================
// ALERTAS / TOAST
// ============================
function mostrarAlerta(tipo, mensagem) {
  const alert = document.createElement('div');
  alert.classList.add('alert', `alert-${tipo}`, 'show');
  alert.textContent = mensagem;

  document.body.appendChild(alert);

  // Remove após 3 segundos
  setTimeout(() => {
    alert.classList.remove('show');
    alert.remove();
  }, 3000);
}

// ============================
// FORMULÁRIO DE CADASTRO
// ============================
const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', function(e) {
    e.preventDefault();

    // Aqui você poderia validar mais campos se quiser
    const nome = formCadastro.nome.value.trim();
    const email = formCadastro.email.value.trim();

    if (nome === '' || email === '') {
      mostrarAlerta('error', 'Preencha todos os campos obrigatórios!');
      return;
    }

    // Mostra modal de sucesso
    abrirModal();

    // Limpa o formulário
    formCadastro.reset();
  });
}