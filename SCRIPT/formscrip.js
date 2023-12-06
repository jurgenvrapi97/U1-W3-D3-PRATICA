const pageForm = document.getElementById('main_form')

pageForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const taskIn = document.getElementById('task')
  alert('hai inviato i dati')

  const taskSpace = document.createElement('p')
  taskSpace.innerText = `${taskIn.value}`

  const cardUserSpace = document.getElementById('taskfill')
  cardUserSpace.appendChild(taskSpace)

  const buttonD = document.createElement('button')
  buttonD.innerText = 'cancella'

  const buttonDelate = document.getElementById('taskfill')
  buttonDelate.appendChild(buttonD)

  taskSpace.addEventListener('click', function () {
    taskSpace.setAttribute('id', 'fatto')
  })

  buttonD.addEventListener('click', function () {
    buttonD.parentNode.removeChild(taskSpace)
    buttonD.setAttribute('id', 'invisible')
  })

  taskIn.value = ''
})
