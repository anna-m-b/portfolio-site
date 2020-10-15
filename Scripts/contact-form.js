const submitBtn = document.getElementById('submit')
const clearBtn = document.getElementById('clear')
const form = document.getElementById('form')

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
// from https://ui.dev/validate-email-address-javascript/

document.addEventListener('click', function(event) {
  event.preventDefault() 
  
  let name = document.getElementById('name').value 
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value
  
  if (event.target === submitBtn) {
    if (!name) { errorStyles('name') }
    else if (!email || !emailIsValid(email)) {  errorStyles('email') } 
    else if (!message) {  errorStyles('message') }
    else  { 
      removeAllErrorStyles()
      setTimeout(() => {
          alert(`Your message has been sent! ${name}   ${email}   ${message}`)}, 500) 
      setTimeout(() => { 
          form.reset()}, 500)    
    } 
  }

  if (event.target === clearBtn) {
    form.reset()
    removeAllErrorStyles()
  }
})

function errorStyles(id) {
  document.getElementById(id).classList.add('input-error')
  const label = document.getElementById(`${id}-label`)
  console.log(label, 'label')
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

