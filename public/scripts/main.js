import Modal from './modal.js' //importando modal

const modal = Modal() //instanciando modal

const modalTitle = document.querySelector('.modal h2') //titulo do modal
const modalDescription = document.querySelector('.modal p') //descrição do modal
const modalButton = document.querySelector('.modal button') //botão do modal

const checkButtons = document.querySelectorAll(".actions a.check") //pegar todos os botões que existe com a classe check

checkButtons.forEach(button => { //para cada botão que existe com a classe check
  button.addEventListener("click", handleClick) //adicionar a escuta
}) //fim do forEach

/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete") //pegar todos os botões que existe com a classe delete

deleteButton.forEach(button => { //para cada botão que existe com a classe delete
  button.addEventListener("click", (event) => handleClick(event, false)) //adicionar a escuta
}) //fim do forEach

function handleClick(event, check = true) { //função que será chamada quando o botão for clicado
  event.preventDefault() //prevenir o comportamento padrão do botão
  const text = check ? "Marcar como lida" : "Excluir" //se o botão for marcar como lida ou excluir
  const slug = check ? "check" : "delete" //se o botão for marcar como lida ou excluir
  const roomId = document.querySelector("#room-id").dataset.id //pegar o id da sala
  const questionId = event.target.dataset.id //pegar o id da pergunta

  const form = document.querySelector(".modal form") //pegar o formulário
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`) //adicionar o action do formulário

  modalTitle.innerHTML = `${text} esta pergunta` //adicionar o titulo do modal
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` //adicionar a descrição do modal
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}` //adicionar o botão do modal
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red") //se for marcar como lida ou excluir, remover a classe red

  modal.open() //abrir modal
} //fim da função handleClick
