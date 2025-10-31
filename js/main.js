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




