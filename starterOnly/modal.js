function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseIcon = document.querySelector(".close");
const form = document.getElementById('form');


// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}


form.addEventListener('submit', (e) => {
  let messages = [];

  if (messages.length === 0) {
    e.preventDefault();
    console.log(messages.join(', '));
  }
})

//Validate form
function validate() {

  //Regex necessary for different validations
  const nameRegex =  /^[a-z][a-z\d]*[a-z]$/;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  const numberRegex = /^[0-9]*$/;


  //First Name validation
  let firstName = document.getElementById('first').value.trim();
  if(!nameRegex.test(firstName)){
    const nameErrorMessage = "Le prénom doit être composé uniquement de caractères et en contenir au moins 2";
    printError(formData[0], nameErrorMessage);
  } else {
    removeError(formData[0]);
  }

  //Last name validation
  let lastName = document.getElementById('last').value.trim();
  if(!nameRegex.test(lastName)){
    const lastNameErrorMessage = "Le nom doit être composé uniquement de caractères et en contenir au moins 2"
    printError(formData[1], lastNameErrorMessage);
  } else {
    removeError(formData[1]);
  }
  
  //Email validation
  let email = document.getElementById('email').value.trim().toLowerCase();
  if(!emailRegex.test(email)){
    const emailErrorMessage = "Veuillez entrer une adresse e-mail valide";
    printError(formData[2], emailErrorMessage);
  } else {
    removeError(formData[2]);
  }
  
  //Date validation
  let date = document.getElementById('birthdate').value;
  if (!dateRegex.test(date)) {
    const dateErrorMessage = "Veuillez entrer une date valide";
    printError(formData[3], dateErrorMessage)
  } else if (!isDateBeforeToday(date)) {
    const dateErrorMessage = "La date ne doit pas être dans le futur";
    printError(formData[3], dateErrorMessage)
  } else {
    removeError(formData[3]);
  }
  

  //Quantity validation
  let quantity = document.getElementById('quantity').value;
  if (!numberRegex.test(quantity) || quantity < 0 || quantity > 99) {
    const quantityErrorMessage = "Veuillez entrer un nombre valide"
    printError(formData[4], quantityErrorMessage);
  } else {
    removeError(formData[4]);
  }
  
  //Location validation
  let location = document.querySelector('input[name="location"]:checked');
  console.log(location);
  if (location === null) {
    const locationError = "Veuillez sélectionner une ville";
    printError(formData[5], locationError);
  } else {
    removeError(formData[5]);
  }
  
  //Conditions and terms validation
  let acceptTCo = document.getElementById('checkbox1').checked;
  if (!acceptTCo) {
    const tCoErrorMessage = "Vous devez vérifier que vous acceptez les termes et conditions."
    printError(formData[6], tCoErrorMessage)
  } else {
    removeError(formData[6]);
  }
}

//Show error 
function printError(htmlElement, errorMessage) {
  htmlElement.setAttribute("data-error", errorMessage);
  htmlElement.setAttribute("data-error-visible", "true");
}

//Remove error
function removeError(htmlElement) {
  htmlElement.setAttribute("data-error-visible", "false");
  htmlElement.removeAttribute("data-error");
}

//Check if date if before today
function isDateBeforeToday(date) {
  const today = new Date().getTime()
  const dateInput = new Date(date).getTime();

  return ((today - dateInput) > 0);
}




