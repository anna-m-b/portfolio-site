const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
const form = document.getElementById('form');

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  
}
// from https://ui.dev/validate-email-address-javascript/

document.addEventListener('click', function(event) {
  event.preventDefault() 
  let name = document.getElementById('name').value; 
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  if (event.target === submitBtn) {
 

    
    if (!name) { errorStyles('name') }
    if (!email) {  errorStyles('email') } 
    // if (!emailResult) {  errorStyles('email') } 
    if (!message) {  errorStyles('message') }
    else if (name && emailIsValid(email) && message) { 
      alert(`Your message has been sent! ${name}, ${email}, ${message}`) 
      clearForm()
    } else {
      return errorStyles('email')
    }
  }

  if (event.target === clearBtn) {
   clearForm();
  }
});
// to do - email wrong format


function clearForm() {
    form.reset();
    removeErrorStyles('name')
    removeErrorStyles('email')
    removeErrorStyles('message')
}


function errorStyles(id) {
  document.getElementById(id).style.border = "2px solid #f91a6f";
  const label = document.getElementById(`${id}-label`)
  if (!label.childNodes[1]) {
    let helperText;
    if (id === 'email') {
    helperText = document.createTextNode(`Please enter a valid email address`)
    } else {
    helperText = document.createTextNode(`Please enter your ${id}`)
    }
    const p = document.createElement('p')
    p.appendChild(helperText)
    label.appendChild(p)
    p.id = `${id}-helper`;
    p.style.color = "#f91a6f";
    p.style.fontSize = '1rem';
  } 
}

function removeErrorStyles(id) {
  document.getElementById(id).style.border = "none";
  const label = document.getElementById(`${id}-label`)
  if (label.childNodes[1]) {label.removeChild(label.childNodes[1])}
}


// if all are blank - works
// if name is blank - works
// if email is blank - works
// if message is blank - works

// if filled in, then edited - alerts first - then shows error styles
