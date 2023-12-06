const pageForm = document.getElementById('main_form')

pageForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const taskIn = document.getElementById('task')
  alert('hai inviato i dati')

  const taskSpace = document.createElement('p')
  taskSpace.innerText = `${taskIn.value}`

  const cardUserSpace = document.getElementById('taskfill')
  cardUserSpace.appendChild(taskSpace)

  taskSpace.addEventListener('click', function () {
    taskSpace.setAttribute('id', 'fatto')
  })

  taskIn.value = ''
})
