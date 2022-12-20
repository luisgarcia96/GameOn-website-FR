function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseIcon = document.querySelector(".close");
const form = document.getElementById('form');


//Add error container to form inputs 



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
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
  const nameRegex =  /^[a-z][a-z\d]*[a-z]$/;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/


  //First Name validation
  let firstName = document.getElementById('first').value.trim();
  if(!nameRegex.test(firstName)){
    const nameErrorMessage = "Le prénom doit être composé uniquement de caractères et en contenier au moins 2";
    printError(formData[0], nameErrorMessage);
  }

  //Last name validation
  let lastName = document.getElementById('last').value.trim();
  if(!nameRegex.test(lastName)){
    const lastNameErrorMessage = "Le nom doit être composé uniquement de caractères et en contenier au moins 2"
    console.log(lastNameErrorMessage);
  }
  
  //Email validation
  let email = document.getElementById('email').value.trim().toLowerCase();
  if(!emailRegex.test(email)){
    const emailErrorMessage = "Veuillez entrer une adresse e-mail valide";
    console.log(emailErrorMessage);
  }
  
  //Date validation
  

  //Quantity validation
  
  
  //Location validation
  
  
  //Conditions and terms validation
  let acceptTCo = document.getElementById('checkbox1').checked;
  if (!acceptTCo) {
    const tCoErrorMessage = "Vous devez vérifier que vous acceptez les termes et conditions."
    console.log(tCoErrorMessage)
  }
}

//Create an error div
function printError(htmlElement, errorMessage) {
  const div = document.createElement("div");
  div.innerHTML = errorMessage;
  div.classList.add("errorMessage");
  htmlElement.appendChild(div);
}




