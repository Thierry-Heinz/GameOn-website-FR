/**
 * Form validation functionality
 **/

//DOM form element
const formEl = document.querySelector("form");

//DOM form fields
const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const emailEl = document.querySelector("#email");
const quantityEl = document.querySelector("#quantity");
const birthDateEl = document.querySelector("#birthdate");
const radioEls = document.getElementsByName("location");
const userCheckboxEl = document.querySelector("#checkbox1");
const userPreferenceEl = document.querySelector("#checkbox2");

// Regex for ulterior validation
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

/**
 * Utility Functions
 **/

//Check if the input fields is not Empty
const isRequired = (value) => {
  if (value === "") {
    return false;
  } else {
    return true;
  }
};

//Trim the value from the input
const getValTrim = (el) => el.value.trim();

//Check if text value is minimun length
const isMinLength = (length, min) => (length < min ? false : true);

//Check if value is a number
const isNumber = (number) =>
  typeof number === "number" && !Number.isNaN(number);

//Check if the value is an email expression
const isEmailValid = (email, regex) => regex.test(email);

//Test the Date formatting
const isDateYmd = (date, regex) => regex.test(date);

//Check if a radio field is selected
const isRadioChecked = (radioEls) => {
  let oneRadioChecked = false;

  for (const radioEl of radioEls) {
    if (radioEl.checked) {
      oneRadioChecked = true;
    }
  }
  return oneRadioChecked;
};

//Check if the checkbox is checked
const isCheckboxChecked = (checkboxEl) => checkboxEl.checked;

/**
 * Validation Function
 */

// Name validation
const validateName = (name, minLength) =>
  isRequired(name) && isMinLength(name.length, minLength);

// Email Validation
const validateEmail = (email) =>
  isRequired(email) && isEmailValid(email, regexEmail);

// Birthdate Validation
const validateBD = (date, regex) => {
  const BDdate = new Date(date);
  const today = new Date();
  return (
    isRequired(date) &&
    isDateYmd(date, regex) &&
    (BDdate < today ? true : false)
  );
};

// Quantity field Validation
const validateQty = (qty) => isRequired(qty) && isNumber(qty);

/**
 * Visual Function
 */

// Show error messages under input of formData class
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

// Show a validation message if all the inputs checked are valid.
const validationMessage = (bool) => {
  const formDatas = formEl.querySelectorAll(".formData");
  const successHolder = document.querySelector("#successHolder");
  const successMessageHolder = successHolder.querySelector(
    ".successHolder__message"
  );
  if (bool) {
    for (const formData of formDatas) {
      formData.setAttribute("data-error-visible", false);
      formData.setAttribute("data-error", "");
      formData.querySelector("input").value = "";
    }
    formEl.style.display = "none";
    successHolder.style.display = "block";
    successMessageHolder.textContent = "Merci ! Votre réservation a été reçue.";
  } else {
    successMessageHolder.textContent = "";
  }
};

/**
 * Form submit listener
 *
 * - prevent normal behavior
 * - use utility validation function on selected form input fields
 * - use visual function to show error (by passing the message)
 * - Check if validation is successful on each input fields
 * - Display success message if validation of input fields succeeded
 *
 **/

formEl.addEventListener("submit", function (e) {
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
    validateEmail(getValTrim(emailEl), regexEmail),
    "Veuillez entrer une adresse email valide."
  );
  let isBDValid = showError(
    birthDateEl,
    validateBD(getValTrim(birthDateEl), regexDate),
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
