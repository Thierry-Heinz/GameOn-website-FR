//Form validation functionality

//DOM elements
const formEl = document.querySelector("form");

//form fields for validation
const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const emailEl = document.querySelector("#email");
const quantityEl = document.querySelector("#quantity");
const birthDateEl = document.querySelector("#birthdate");
const radioEls = document.getElementsByName("location");
const userCheckboxEl = document.querySelector("#checkbox1");
const userPreferenceEl = document.querySelector("#checkbox2");

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

const getValTrim = (el) => el.value.trim();

//Check text is minimun length
const isMinLength = (length, min) => (length < min ? false : true);

//Check is number
const isNumber = (number) =>
  typeof number === "number" && !Number.isNaN(number);

//Check email expression
const isEmailValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

//Test the Date
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
const isCheckboxChecked = (checkboxEl) => checkboxEl.checked;

// Validation Function
//Name validation
const validateName = (name, minLength) =>
  isRequired(name) && isMinLength(name.length, minLength);

// Validate Email
const validateEmail = (email) => isRequired(email) && isEmailValid(email);

//Validate the birthdate
const validateBD = (date) => {
  const BDdate = new Date(date);
  const today = new Date();

  return isRequired(date) && isDateYmd(date) && (BDdate < today ? true : false);
};

// Validate quantity field
const validateQty = (qty) => isRequired(qty) && isNumber(qty);

/**
 *
 * Visual Function
 *
 */

// Show error messages under input of .formData
const showError = (el, bool, message) => {
  const formData = el.parentElement;

  if (!bool) {
    formData.setAttribute("data-error-visible", true);
    formData.setAttribute("data-error", message);
    return false;
  } else {
    formData.setAttribute("data-error-visible", false);
    formData.setAttribute("data-error", "");
    return true;
  }
};

// Show a validation message if all input of the form are true.
const validationMessage = (bool) => {
  const formDatas = formEl.querySelectorAll(".formData");
  const successHolder = document.querySelector("#successHolder");
  if (bool) {
    for (const formData of formDatas) {
      formData.setAttribute("data-error-visible", false);
      formData.setAttribute("data-error", "");
      formData.querySelector("input").value = "";
    }
    formEl.style.display = "none";
    successHolder.textContent = "Merci ! Votre réservation a été reçue.";
  } else {
    successHolder.textContent = "";
  }
};

/**
 * Form submit listener
 *
 **/

formEl.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let isFormValid = false;

  //Fields Validation
  let isFNameValid = showError(
    firstNameEl,
    validateName(getValTrim(firstNameEl), 2),
    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  );
  let isLNameValid = showError(
    lastNameEl,
    validateName(getValTrim(lastNameEl), 2),
    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  );
  let isEmailValid = showError(
    emailEl,
    validateEmail(getValTrim(emailEl)),
    "Veuillez entrer une adresse email valide."
  );
  let isBDValid = showError(
    birthDateEl,
    validateBD(getValTrim(birthDateEl)),
    "Vous devez entrer votre date de naissance."
  );
  let isQuantityValid = showError(
    quantityEl,
    validateQty(parseInt(getValTrim(quantityEl))),
    "Veuillez entrer un nombre."
  );
  let isRadioValid = showError(
    radioEls[0],
    isRadioChecked(radioEls),
    "Vous devez choisir une option."
  );
  let isUserCheckValid = showError(
    userCheckboxEl,
    isCheckboxChecked(userCheckboxEl),
    "Vous devez vérifier que vous acceptez les termes et conditions."
  );

  if (
    isFNameValid &&
    isLNameValid &&
    isEmailValid &&
    isBDValid &&
    isQuantityValid &&
    isRadioValid &&
    isUserCheckValid
  ) {
    isFormValid = true;
  }

  validationMessage(isFormValid);
});
