export default function Modal() { //função que será exportada

  const modalWrapper = document.querySelector('.modal-wrapper') //pegar o wrapper do modal
  const cancelButton = document.querySelector('.button.cancel') //pegar o botão cancelar

  cancelButton.addEventListener("click", close) //adicionar a escuta

  function open() { //função que abre o modal
    modalWrapper.classList.add("active") //adicionar a classe active
  } //fim da função open
  function close() { //função que fecha o modal
    modalWrapper.classList.remove("active") //remover a classe active
  } //fim da função close

  return { //função que será exportada
    open, //abrir modal
    close //fechar modal
  } //fim da função que será exportada
} //fim da função Modal