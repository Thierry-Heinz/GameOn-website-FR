//Form validation functionality

//DOM elements
const form = document.querySelector("form");

//form fields for validation
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const birthDate = document.querySelector("#birthdate");
const radio = document.getElementsByName("location");
const userCheckbox = document.querySelector("#checkbox1");
const userPreference = document.querySelector("#checkbox2");

//Utility Functions

//Check if not Empty
const isRequired = (value) => {
  if (value === "") {
    return false;
  } else {
    return true;
  }
};

//Check text is minimun length
const isMin = (length, min) => {
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
  } else if (!isMin(name.length, minLength)) {
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

// Form submit listener
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  let isFormValid = false;

  //Saving the different values
  const fNameVal = firstName.value.trim();
  const lNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const bdVal = birthDate.value.trim();
  const radioEls = radio;
  const userCheckEl = userCheckbox;
  const userPrefEl = userPreference;

  //Fields Validation
  let isFNameValid = validateName(fNameVal);
  let isLNameValid = validateName(lNameVal);
  let isEmailValid = validateEmail(emailVal);
  let isRadioValid = isRadioChecked(radioEls);
  let isUserCheckValid = isCheckboxChecked(userCheckEl);

  console.log("isFNameValid:" + isFNameValid);
  console.log("isLNameValid:" + isLNameValid);
  console.log("isEmailValid:" + isEmailValid);
  console.log("isRadioValid:" + isRadioValid);
  console.log("isUserCheckValid:" + isUserCheckValid);

  if (
    isFNameValid &&
    isLNameValid &&
    isEmailValid &&
    isRadioValid &&
    isUserCheckValid
  ) {
    isFormValid = true;
  }

  if (isFormValid) {
    console.log("Success Message");
  } else {
    console.log("Error Message");
  }
});
