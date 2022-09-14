let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};

const handleSlider = (event) => {
  const charCountEl = getElement("char-count");
  charCountEl.innerText = event;
};

const handleNumberCheckbox = () => {
  const numberEl = getElement("number");

  if (numberEl.checked === true) {
    charSet += numberSet;
    console.log(charSet);
  } else {
    charSet = charSet.replace(/0123456789/g, "");
    console.log(charSet);
  }
};

const handleCharacterCheckbox = () => {
  const specialCharEl = getElement("special");

  if (specialCharEl.checked === true) {
    charSet += specialCharSet;
    console.log(charSet);
  } else {
    charSet = charSet.replace(/[^\w ]/g, "");
    console.log(charSet);
  }
};

const generatePassword = () => {
  const passwordEl = getElement("password");

  const charCount = getElement("char-count").innerText;
  let password = "";
  for (let i = 0; i < charCount; i++) {
    const randomNumber = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomNumber, randomNumber + 1);
  }

  passwordEl.value = password;
};

const handleViewPassword = () => {
  const passwordEl = getElement("password");
  const view = getElement("view-check");
  const viewIcon = getElement("view-icon");

  if (view.checked === true) {
    passwordEl.setAttribute("type", "text");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye text-white"></i>`;
  } else {
    passwordEl.setAttribute("type", "password");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye-slash text-white"></i>`;
  }
};

const handleCopy = () => {
  const copyText = getElement("password");
  copyText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
};

generatePassword();
