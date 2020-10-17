const submitBtn = document.getElementById('submit')
const clearBtn = document.getElementById('clear')
const form = document.getElementById('form')

document.addEventListener('click', function(event) {
  event.preventDefault() 
  const name = document.getElementById('name').value 
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  
  if (event.target === submitBtn) {
    removeAllErrorStyles()
    const problemInputs = validateForm(name, email, message)
    if (problemInputs.length === 0) {
      alert(`Your message has been sent! ${name}   ${email}   ${message}`)
      form.reset()
    } else {
      problemInputs.forEach(errorStyles)
    }
  }

  if (event.target === clearBtn) {
    form.reset()
    removeAllErrorStyles()
  }
})

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
// from https://ui.dev/validate-email-address-javascript/

function validateForm(name, email, message) {
  const problemInputs = [
    {id: 'name', value: name}, 
    {id: 'email', value: emailIsValid(email) ? email : ""}, 
    {id: 'message', value: message}]
    .filter(input => !input.value)
    return problemInputs
}

function errorStyles(input) {
  const id = input.id
  document.getElementById(id).classList.add('input-error')
  const label = document.getElementById(`${id}-label`)
  label.childNodes[1].classList.add('show-helper-text')
  } 

function removeErrorStyles(id) {
  document.getElementById(id).classList.remove('input-error')
  const label = document.getElementById(`${id}-label`)
  label.childNodes[1].classList.remove('show-helper-text')
}

function removeAllErrorStyles() {
    removeErrorStyles('name')
    removeErrorStyles('email')
    removeErrorStyles('message')
}



