//Form validation functionality

//DOM elements
const form = document.querySelector("form");
//const formdata = document.querySelectorAll(".formData");

//form fields for validation
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const birthDate = document.querySelector("#birthdate");
const radio = document.getElementsByName("location");
const userCheckbox = document.querySelector("#checkbox1");
const userPreference = document.querySelector("#checkbox2");

/**
 * Utility Functions
 **/

//Check if not Empty
const isRequired = (value) => {
  if (value === "") {
    return false;
  } else {
    return true;
  }
};

//Check text is minimun length
const isMinLength = (length, min) => {
  if (length < min) {
    return false;
  } else {
    return true;
  }
};

//Check is number
const isNumber = (number) => {
  if (typeof number == "number") {
    return true;
  } else {
    return false;
  }
};

//Check email expression
const isEmailValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

<<<<<<< HEAD
//Test
=======
>>>>>>> 0d8de3cb7108e02dd14683dce3091a4d37571884
const isDateYmd = (date) => {
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
};

//Check if radio is selected
const isRadioChecked = (radioEls) => {
  let oneRadioChecked = false;

  for (const radioEl of radioEls) {
    if (radioEl.checked) {
      oneRadioChecked = true;
    }
  }
  return oneRadioChecked;
};

//Check if checkbox is checked
const isCheckboxChecked = (checkboxEl) => {
  if (checkboxEl.checked) {
    return true;
  } else {
    return false;
  }
};

// Validation Function
//Name validation
const validateName = (name) => {
  const minLength = 2;
  if (!isRequired(name)) {
    return false;
  } else if (!isMinLength(name.length, minLength)) {
    return false;
  } else {
    return true;
  }
};

// Validate Email
const validateEmail = (email) => {
  if (!isRequired(email)) {
    return false;
  } else if (!isEmailValid(email)) {
    return false;
  } else {
    return true;
  }
};

<<<<<<< HEAD
//Validate the birthdate
const validateBD = (date) => {
  const BDdate = new Date(date);
  const today = new Date();

=======
//Validate the date
const validateBD = (date) => {
  const BDdate = new Date(date);
  const today = new Date();
  if (BDdate > today) {
    return false;
  }
>>>>>>> 0d8de3cb7108e02dd14683dce3091a4d37571884
  if (!isRequired(date)) {
    return false;
  } else if (!isDateYmd(date)) {
    return false;
<<<<<<< HEAD
  } else if (BDdate > today) {
    return false;
=======
>>>>>>> 0d8de3cb7108e02dd14683dce3091a4d37571884
  } else {
    return true;
  }
};

// Validate quantity field
const validateQty = (qty) => {
  if (!isRequired(qty)) {
    return false;
  } else if (!isNumber(qty)) {
    return false;
  } else {
    return true;
  }
};

/**
 *
 * Visual Function
 *
 */
<<<<<<< HEAD

// Show error messages under input of .formData
=======
>>>>>>> 0d8de3cb7108e02dd14683dce3091a4d37571884
const showError = (el, bool, message) => {
  const formData = el.parentElement;
  const errorHolder = formData.querySelector("small");
  errorHolder.textContent = "";

  if (!bool) {
    formData.classList.remove("success", "error");
    formData.classList.add("error");
    errorHolder.textContent = message;
    return false;
  } else {
    formData.classList.remove("success", "error");
    formData.classList.add("success");
    return true;
  }
};

<<<<<<< HEAD
// Show a validation message if all input of the form are true.
=======
>>>>>>> 0d8de3cb7108e02dd14683dce3091a4d37571884
const validationMessage = (bool) => {
  const cls = ["error", "success"];
  const formData = form.querySelectorAll(".formData");
  const successHolder = form.querySelector("#successHolder");
  if (bool) {
    for (const el of formData) {
      el.classList.remove(...cls);
      el.querySelector("input").value = "";
    }
    successHolder.textContent = "Merci ! Votre réservation a été reçue.";
  } else {
    successHolder.textContent = "";
  }
};

/**
 * Form submit listener
 *
 **/

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let isFormValid = false;

  //Fields Validation
  let isFNameValid = showError(
    firstName,
    validateName(firstName.value.trim()),
    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  );
  let isLNameValid = showError(
    lastName,
    validateName(lastName.value.trim()),
    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  );
  let isEmailValid = showError(
    email,
    validateEmail(email.value.trim()),
    "Veuillez entrer une adresse email valide."
  );
  let isBDValid = showError(
    birthDate,
    validateBD(birthDate.value.trim()),
    "Vous devez entrer votre date de naissance."
  );
  let isRadioValid = showError(
    radio[0],
    isRadioChecked(radio),
    "Vous devez choisir une option."
  );
  let isUserCheckValid = showError(
    userCheckbox,
    isCheckboxChecked(userCheckbox),
    "Vous devez vérifier que vous acceptez les termes et conditions."
  );

  if (
    isFNameValid &&
    isLNameValid &&
    isEmailValid &&
    isBDValid &&
    isRadioValid &&
    isUserCheckValid
  ) {
    isFormValid = true;
  }

  validationMessage(isFormValid);
});
