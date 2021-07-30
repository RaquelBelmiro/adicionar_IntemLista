var addBtn = document.querySelector('button')
var inputT = document.getElementById('addLista')
var listaCompleta = document.querySelector('#listaCompleta')
var itensLista = document.getElementsByClassName('notDone')

addBtn.addEventListener('click', function () {
  var liAdd = document.getElementById('addLista').value
  if (liAdd !== '') {
    var liNova = document.createElement('li')
    liNova.textContent = liAdd
    liNova.classList.add('notDone')
    listaCompleta.appendChild(liNova)
    liLength = itensLista.length
    itensLista = document.getElementsByTagName('li')
  }
  inputT.value = ''
  atualizarEvento()
})

function atualizarEvento() {
  var lis = document.getElementById('listaCompleta').getElementsByTagName('li')

  lis[lis.length - 1].addEventListener('click', function () {
    this.classList.toggle('done')
  })
}
