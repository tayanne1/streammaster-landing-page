// Seleciona o botão de salvar e o botão de já assistido
const saveBtn = document.querySelector('.save-btn i');
const watchedBtn = document.querySelector('.watched-btn i');

// Evento para marcar ou desmarcar como salvo
saveBtn.addEventListener('click', () => {
  saveBtn.classList.toggle('active');
});

// Evento para marcar ou desmarcar como assistido
watchedBtn.addEventListener('click', () => {
  watchedBtn.classList.toggle('active');
});
